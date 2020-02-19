const { ipcRenderer } = require('electron');

ipcRenderer.send('maximizeScreen', null);
