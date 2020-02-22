const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        icon: './views/imgs/play.png',
        width: 800,
        height: 600,
        fullscreen: false,
        webPreferences: {
          nodeIntegration: true
        }
    });
    
    win.removeMenu();
    win.loadFile('./views/intro/intro.html');

    ipcMain.on('maximizeScreen', (event, arg) => {
      win.maximize();
    });

    ipcMain.on('unmaximizeScreen', (event, args) => {
      win.unmaximize();
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