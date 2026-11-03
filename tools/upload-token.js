// Upload-gate token: FT_UPLOAD_TOKEN if set, else derived from FT_FTP_PASS with HMAC (the FTP password itself is never sent)
const crypto = require('crypto');
const env = require('./env');
module.exports = () => {
  try { const t = env('FT_UPLOAD_TOKEN'); if (t) return t; } catch (e) { }
  return crypto.createHmac('sha256', env('FT_FTP_PASS')).update('futuretech-social-upload-gate-v1').digest('hex');
};
