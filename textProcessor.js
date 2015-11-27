var tipots = require('this-is-probably-ok-to-say')
// var gd = require('gender-neutral')

module.exports = function (str) {
  return tipots(str) ? gd(str) : false
  // return tipots(str) && gd(str) // ?
}