const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

var mainWindow;
app.on('ready' , () => {
	mainWindow = new BrowserWindow()
	mainWindow.loadURL(url.format({
		pathname: path.join( __dirname , 'index.html'),
		protocol: 'file',
		slashes : true
	}));
	
})
