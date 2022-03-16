const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let window = null

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 800px
    width: 1100,
    // Set the initial height to 600px
    height: 800,
    // Set the default background color of the window to match the CSS
    // background color of the page, this prevents any white flickering
    backgroundColor: "#ADD8E6",
    // Don't show the window until it's ready, this prevents any white flickering
    show: true
  })

  //Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  }))
    
  //  window.loadURL("file://" + __dirname + "../"+ "/index.html?local=true");
   console.log(path.join(__dirname, '../index.html'))
   //window.loadFile(__dirname + "/index.html?local=true");
  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.show()
  })
})
