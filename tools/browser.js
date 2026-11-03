// Launch headless Chrome: system Chrome on the Windows laptop, puppeteer's bundled Chrome elsewhere (cloud)
const fs = require('fs');
const WIN_CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
module.exports = async () => {
  if (process.env.CHROME_PATH || fs.existsSync(WIN_CHROME)) {
    return require('puppeteer-core').launch({ executablePath: process.env.CHROME_PATH || WIN_CHROME, headless: true });
  }
  return require('puppeteer').launch({ headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
};
