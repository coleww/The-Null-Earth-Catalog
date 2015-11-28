var ql = require('queneau-letters')()
var after = require('after')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
  var pos = cp[2] // snow
  var pes = pick(pos)[0]//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = pes
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})



  ql.seed(lines.join(' ').split(/\s/))
module.exports = function (num, cb) {



  var stuff = []

  for (var i = 0; i < num; i++){
    stuff.push(ql.fill(2 + ~~(Math.random() * 5)))
  }



  return stuff.join(' ')
}