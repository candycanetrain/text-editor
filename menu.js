const {app, Menu, dialog} = require('electron')

function createMenu(browserWindow) {
  const template = [
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
          click() {
            dialog.showSaveDialog(browserWindow, (path) => {
              browserWindow.webContents.send('save-file', path)
            })
          }
        },
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'pasteandmatchstyle'},
        {role: 'delete'},
        {role: 'selectall'}
      ]
    },
    {
      label: 'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'toggledevtools'},
        {type: 'separator'},
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'},
        {type: 'separator'},
        {role: 'togglefullscreen'}
      ]
    },
    {
      role: 'window',
      submenu: [
        {role: 'minimize'},
        {role: 'close'}
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('https://electron.atom.io') }
        }
      ]
    }
  ]
 
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

module.exports = { createMenu }