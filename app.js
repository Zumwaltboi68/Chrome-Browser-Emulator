const puppeteer = require('puppeteer');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/emulate', async (req, res) => {
  const url = req.body.url;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content();
  await browser.close();
  res.send(html);
});

console.log('Listening on port 3000');
app.listen(3000);
