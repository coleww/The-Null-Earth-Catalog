var fs = require('fs')
// var tipots = require('this-is-probably-ok-to-say')
// var path = './corpuses/poems'
// fs.readdirSync(path).forEach(function (f) {
//   var dats = 'module.exports = ' + JSON.stringify(fs.readFileSync(path + '/' + f).toString().split("\n"), null, 2)
//   fs.writeFileSync(path + '/' + f + '.js', dats)
//   fs.unlinkSync(path + '/' + f)
// })

var imageMap = fs.readdirSync('./corpuses').filter(function(x){return !x.match('DS_Store')}).map(function (ip) {
  return fs.readdirSync('./corpuses/' + ip).filter(function(x){return !x.match('DS_Store')}).map(function (i) {
    return './corpuses/' + ip + '/' + i
  })
})

fs.writeFileSync('./corpusMap.js', 'module.exports = ' + JSON.stringify(imageMap, null, 2))