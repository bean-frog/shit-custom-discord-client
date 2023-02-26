// preload.js
const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');

contextBridge.exposeInMainWorld('fs', {
  readFileSync: fs.readFileSync
});
