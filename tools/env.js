// Read a secret: environment variable first (cloud), else the founder's Windows laptop store (HKCU\Environment)
module.exports = name => {
  if (process.env[name]) return process.env[name].trim();
  if (process.platform !== 'win32') throw new Error(`Missing environment variable ${name} — add it in the Claude cloud environment settings`);
  const { execFileSync } = require('child_process');
  return execFileSync('reg', ['query', 'HKCU\\Environment', '/v', name]).toString().match(/REG_SZ\s+(.+?)\r?\n/)[1].trim();
};
