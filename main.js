const { protocol, app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

app.on('ready', () => {
   
  const newWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });

  newWindow.loadURL('https://discord.com');
  newWindow.webContents.on('did-finish-load', () => {
    const cssPath1 = path.join(__dirname, 'css', 'hoonicord_light.css');
    fs.readFile(cssPath1, 'utf8', (err, data1) => {
      if (err) {
        console.log('Error loading CSS:', err);
        return;
      }
      const style1 = newWindow.webContents.insertCSS(data1);
      console.log('CSS 1 loaded');

     /* const cssPath2 = path.join(__dirname, 'css', 'deeznutslmao.css');
      fs.readFile(cssPath2, 'utf8', (err, data2) => {
        if (err) {
          console.log('Error loading CSS:', err);
          return;
        }
        const style2 = newWindow.webContents.insertCSS(data2);
        console.log('CSS 2 loaded');
      });*/
    });
  });
});
