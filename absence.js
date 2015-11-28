var lipogram = require('lipogram')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
var shuffle = require('shuffle-array')
console.log('an absence is a thing to, yeah')
  var pos = cp[0] // poetry
  var sos = cp[3] // poetry
  var pes = pick(pos, {count: 12})//.reduce(function(a, b) {return a.concat(b)})
  var ses = pick(sos, {count: 12})//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = ses.concat(pes)
                .reduce(function(a, b) {return a.concat(b)})
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})

  var macaos = lines.filter(function (l) {
    return lipogram(l, ['u', 'i'])
  })
module.exports = function (num, cb) {


  var words = shuffle(macaos).join(' ').split(' ')

  return words.slice(0, num).join(' ')
}