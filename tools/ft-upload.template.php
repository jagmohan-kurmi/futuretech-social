<?php
// FutureTech social media upload gate: saves one post image/video into this /social folder over HTTPS.
// Auth: X-FT-Token header (only its SHA-256 is stored here). Accepts only new ft-*.png/jpg/jpeg/mp4/txt files; never overwrites or deletes.
header('Content-Type: application/json');
header('X-Robots-Tag: noindex');

const TOKEN_SHA256 = '__TOKEN_SHA256__';
const MAX_BYTES = 60 * 1024 * 1024;
const ALLOWED = ['png' => ['image/png'], 'jpg' => ['image/jpeg'], 'jpeg' => ['image/jpeg'], 'mp4' => ['video/mp4'], 'txt' => ['text/plain']];

function out($code, $data) { http_response_code($code); echo json_encode($data); exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['error' => 'method not allowed']);
$given = $_SERVER['HTTP_X_FT_TOKEN'] ?? '';
if ($given === '' || !hash_equals(TOKEN_SHA256, hash('sha256', $given))) { usleep(500000); out(403, ['error' => 'forbidden']); }

$name = $_POST['name'] ?? '';
if (!preg_match('/^ft-[a-z0-9][a-z0-9-]{2,120}\.(png|jpg|jpeg|mp4|txt)$/', $name, $m)) out(400, ['error' => 'bad name: use ft-<lowercase-words>.png|jpg|jpeg|mp4|txt']);
$ext = $m[1];

$f = $_FILES['file'] ?? null;
if (!$f || $f['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($f['tmp_name'])) out(400, ['error' => 'upload failed', 'code' => $f['error'] ?? null]);
if ($f['size'] <= 0 || $f['size'] > MAX_BYTES) out(413, ['error' => 'file too large']);

$mime = (new finfo(FILEINFO_MIME_TYPE))->file($f['tmp_name']);
if (!in_array($mime, ALLOWED[$ext], true)) out(415, ['error' => 'content does not match extension', 'mime' => $mime]);
if (in_array($ext, ['png', 'jpg', 'jpeg'], true) && @getimagesize($f['tmp_name']) === false) out(415, ['error' => 'not a valid image']);

$dest = __DIR__ . DIRECTORY_SEPARATOR . $name;
if (file_exists($dest)) out(409, ['error' => 'file already exists — use a new name']);
if (!move_uploaded_file($f['tmp_name'], $dest)) out(500, ['error' => 'could not save']);
@chmod($dest, 0644);

$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'https';
out(201, ['ok' => true, 'url' => $scheme . '://' . $_SERVER['HTTP_HOST'] . '/social/' . $name, 'bytes' => $f['size']]);
