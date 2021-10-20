const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const setMenu = require("./menu");
const setGlobalShortcut = require("./shortcut");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 1024,
    resizable: false,
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  const menu = setMenu(mainWindow);

  console.log("---- Menu ", menu);
  isDev && mainWindow.webContents.openDevTools();
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
  setGlobalShortcut(mainWindow);
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
