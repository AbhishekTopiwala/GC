const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
  
  let hasError = false;
  
  try {
    const serverProcess = require('child_process').spawn('npm', ['run', 'preview'], { cwd: process.cwd() });
    
    // Wait for server to start
    await new Promise(r => setTimeout(r, 3000));

    const routes = ['/', '/about', '/services', '/menu', '/gallery', '/contact'];
    
    for (const route of routes) {
      console.log(`Loading ${route}...`);
      await page.goto(`http://localhost:4173${route}`);
      // Wait a bit for React to render
      await new Promise(r => setTimeout(r, 1000));
      
      const text = await page.evaluate(() => document.body.innerText);
      if (text.trim() === '' || text.trim() === 'You need to enable JavaScript to run this app.') {
         console.error(`WHITE SCREEN DETECTED on ${route}`);
         hasError = true;
      }
    }

    serverProcess.kill();
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
})();
