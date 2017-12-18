const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const shortcut = require('electron-localshortcut');
app.on('ready', () => {
    let win = new BrowserWindow({
        width: 1000, height: 800, icon: __dirname + '/pdf.ico',        
        webPreferences: { plugins: true }, frame: false,
    })
    let s = electron.screen.getPrimaryDisplay().workAreaSize
    let _s = win.getSize()
    win.on('closed', () => { win = null })
    shortcut.register(win, 'Backspace',
     () => { if(win.webContents.canGoBack()) win.webContents.goBack() });
    shortcut.register(win, 'q', () => { app.quit() });
    shortcut.register(win, 'm', () => { win.minimize() })
    shortcut.register(win, 'Shift+m', 
        () => { win.isMaximized() ? win.setSize(1000, 800) : win.maximize() })
    shortcut.register(win, 'Shift+f', () => { win.setFullScreen(!win.isFullScreen()) })
    shortcut.register(win, 'c', () => { win.center() })
    shortcut.register(win, 'l', () => { win.setPosition(0, win.getPosition()[1]) })
    shortcut.register(win, 'r', () => { win.setPosition(s.width-_s[0], win.getPosition()[1]) })
    win.loadURL("file:///"+process.argv[1])
})