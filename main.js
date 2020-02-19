const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true
        }
    });
    
    win.loadFile('./views/intro/intro.html');

    ipcMain.on('maximizeScreen', (event, arg) => {
      win.maximize();
    });
});


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});