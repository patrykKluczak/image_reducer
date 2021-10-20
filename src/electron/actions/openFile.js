const fs = require("fs");
const { dialog } = require("electron");

exports.openFile = function (mainWindow) {
  dialog
    .showOpenDialog(mainWindow, {
      properties: ["openFile", "openDirectory"],
      filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png"] }],
    })
    .then(({ canceled, filePaths, bookmarks }) => {
      const convertImage = fs.readFileSync(filePaths[0]).toString("base64");
      mainWindow.webContents.send("file:openResponse", {
        image: convertImage,
        path: filePaths[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
