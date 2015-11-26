var tipots = require('this-is-probably-ok-to-say')
var alx = require('alex')
var gd = require('gender-neutral')

module.exports = function (str) {
  if (tipits(str)){
    return false
  }
  if (!alx(str).messages.length) {
    str = gd(str)
  }
  if (!alx(str).messages.length) {
    return false
  }
  return str
}