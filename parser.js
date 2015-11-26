var fs = require('fs')
var tipots = require('this-is-probably-ok-to-say')
var path = './corpuses/poems'
fs.readdirSync(path).forEach(function (f) {
  var dats = 'module.exports = ' + JSON.stringify(fs.readFileSync(path + '/' + f).toString().split("\n"), null, 2)
  fs.writeFileSync(path + '/' + f + '.js', dats)
  fs.unlinkSync(path + '/' + f)
})