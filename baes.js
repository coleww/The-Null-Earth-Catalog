var eatWrapper = require('eat-wrapper')()
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
  var tweets = cp[4] // tweets
  var lines = pick(tweets)[0].map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})
  var lins = pick(lines, {count: 5}).join(' ').split(' ').map(function (word) {

    return !!eatWrapper.keys(word) ? eatWrapper.random(word, true) : word
  })

  var shuffle = require('shuffle-array')
module.exports = function (num, cb) {
console.log('wrapping')




  return shuffle(lins).slice(0, num).join(' ')
}