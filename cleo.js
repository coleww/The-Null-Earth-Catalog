var qB = require('queneau-buckets')()
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
console.log('it me, cleo')
  var sos = cp[3] // poetry
  var ses = pick(sos, {count: 3})//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = ses
                .reduce(function(a, b) {return a.concat(b)})
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})

  qB.seed(lines)
module.exports = function (num, cb) {



  return qB.fill(num)



}