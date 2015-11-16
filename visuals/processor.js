var fs = require('fs')
// hope u `npm install --save canvas` already!
var Canvas = require('canvas')
var Image = Canvas.Image
var filters = require('filters')
// A simple helper function to load image data from the file system. i'm not gonna annotate this function because it's boring.
// Suffice to say that it turns data into pixels and other than that just accept it ok, gosh.
function loadFile(path, cb){
  fs.readFile(path, function(err, data){
    if (err) throw err
    img = new Image
    img.onload = function() {
      cb(img)

      var width = img.width
        var height = img.height

        // make a new canvas that is the same size as the middle finger image, because we wouldn't want to let that get distorted or lose any fidelity
        canvas = new Canvas(width, height)

        // get that context
        ctx = canvas.getContext('2d')



        ctx.putImageData(processed)


    fs.writeFileSync('current.png', canvas.toBuffer())

    }
    img.src = data
  })
}
