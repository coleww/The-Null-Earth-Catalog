var tipots = require('this-is-probably-ok-to-say')
// var gd = require('gender-neutral')

module.exports = function (str) {
  return tipots(str) && !str.match(/fuck|bitch|cunt|ass|whore|slut|shit|dick/) ? str : false
  // return tipots(str) && gd(str) // ?
}