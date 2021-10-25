const { globalShortcut } = require("electron");

module.exports = function (mainWindow) {
  globalShortcut.register("CmdOrCtrl+R", () => mainWindow.reload());
};
