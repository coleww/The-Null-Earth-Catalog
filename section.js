var pick = require('pick-random')


var absence = require('./actors/absence')
var baes = require('./actors/baes')
var snake_oil = require('./actors/snake_oil')
var snowballer = require('./actors/snowballer')

module.exports = function (name, num) {
  var section = document.createElement('section') // nice semantics here
  section.className = 'section'


  var heading  = document.createElement('h1')
  heading.textContent = name
  section.appendChild(heading)

  return section
}
