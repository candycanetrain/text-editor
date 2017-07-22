// 

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

  // let's send information from this process to another process
  // want to build a fewature so user can drag file to window, it will open
  
  //  want to make sure chrome doesn't get in the way?

  // Webcontents has all these properties such as "open", which open the dev tools
  // "on('will-navigate') => to navigate from the page
  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault();
    console.log(url);

    const realPath = url.slice(7);

    // send has channel, and args
    mainWindow.webContents.send('open-file', realPath);
  })
})