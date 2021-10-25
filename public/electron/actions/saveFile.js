const slash = require("slash");
const path = require("path");
const imagemin = require("imagemin");
const imageminMozJpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");

exports.saveFile = function (obj, mainWindow) {
  (async function (obj) {
    const { path: imagePath, qualityImg } = obj;
    const shrink = path.dirname(imagePath) + "/ImageReduce";
    const qualityPng = qualityImg / 100;

    if (imagePath) {
      await imagemin([slash(imagePath)], {
        destination: shrink,
        plugins: [
          imageminMozJpeg({ quality: qualityImg }),
          imageminPngquant({
            quality: [qualityPng, qualityPng],
          }),
        ],
      });
      mainWindow.webContents.send("file:saveResponse", {
        success: true,
        error: ``,
      });
    }
  })(obj);
};
