var fs = require('fs')
// hope u `npm install --save canvas` already!
var Canvas = require('canvas')
var Image = Canvas.Image
var filters = require('./filters')
var img
// A simple helper function to load image data from the file system. i'm not gonna annotate this function because it's boring.
// Suffice to say that it turns data into pixels and other than that just accept it ok, gosh.




// OVALIZE the images? sometimes?
// sometimes add a border, sometimes not

module.exports = function (path, cb){
  fs.readFile('./imgs/' + path, function(err, data){
    if (err) throw err
    img = new Image
    img.onload = function() {
      var width = img.width
      var height = img.height
      // make a new canvas that is the same size as the middle finger image, because we wouldn't want to let that get distorted or lose any fidelity
      canvas = new Canvas(width, height)
      // get that context
      ctx = canvas.getContext('2d')
      var processed = filters.filterImage(filters.threshold, img, 130)
      ctx.putImageData(processed, 0, 0)
      fs.writeFileSync('./imgs/' + path.replace('/', '/PROC-'), canvas.toBuffer())
      fs.unlinkSync('./imgs/' + path)
    }
    img.src = data
  })
}
