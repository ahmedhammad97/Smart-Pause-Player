const { ipcRenderer } = require('electron');

ipcRenderer.send('maximizeScreen', null);

window.onload = function() {
    document.querySelector('#back').addEventListener('click', event => {
        ipcRenderer.send('unmaximizeScreen', null);
    });
}