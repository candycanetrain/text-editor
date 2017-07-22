// const electron = require('electron')
const {app, BrowserWindow} = require('electron')
//same as: 
// const app = require('electron').app

app.on('ready', () => {
  const mainWindow = new BrowserWindow({})
  // To test: 
  // mainWindow.loadURL("http://google.com")
  // __dirname = var that is always defined
  const file = 'file://' + __dirname + '/index.html'
  
  mainWindow.loadURL(file)
})