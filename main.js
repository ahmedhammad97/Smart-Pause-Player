const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
    });
    
    win.loadFile('./views/index.html');
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