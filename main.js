const { app, BrowserWindow, shell } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1400, height: 860, minWidth: 960, minHeight: 620,
    title: 'Event Planner Pro',
    backgroundColor: '#1a2340',
    webPreferences: { nodeIntegration: false, contextIsolation: true, sandbox: false }
  })
  win.setMenuBarVisibility(false)
  win.loadFile('index.html')
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' } })
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow() })
})
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })
