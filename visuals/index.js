var fetchy = require('./fetcher')

var fs = require('fs')
var proc = require('./processor')


fetchy(process.argv.slice(2).join(' '), function ()  {
  fs.readdirSync('./' +  process.argv.slice(2).join('_')).forEach(function (f) {
    proc(f)
  })
})

