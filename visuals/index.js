var fetchy = require('./fetcher')

var fs = require('fs')
var proc = require('./processor')


fetchy('cooking instructions', function ()  {
  fs.readdirSync('./imgs').forEach(function (f) {
    proc(f)
  })

})

