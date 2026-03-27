const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));
  
  try {
    const serverProcess = require('child_process').spawn('npm', ['run', 'preview'], { cwd: process.cwd() });
    
    // Wait for server to start
    await new Promise(r => setTimeout(r, 3000));

    await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
    console.log("Successfully loaded the page.");
    serverProcess.kill();
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
})();
