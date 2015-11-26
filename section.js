var pick = require('pick-random')


var absence = require('./actors/absence')
var baes = require('./actors/baes')
var snake_oil = require('./actors/snake_oil')
var snowballer = require('./actors/snowballer')
var imageMap = require('./imageMap')
module.exports = function (name, num) {
  var section = document.createElement('section') // nice semantics here
  section.className = 'section'


  var cover = document.createElement('center') // nice semantics here
  cover.className = 'page'

  var heading  = document.createElement('h1')
  heading.textContent = name
  cover.appendChild(heading)

  for (var i = 0; i < 4; i++) {
    var subImage = document.createElement('img')
    subImage.className = 'section--img'
    subImage.src = pick(pick(imageMap)[0])[0]
    cover.appendChild(subImage)

    if (i == 1) {
      cover.appendChild(document.createElement('br'))
    }
  }


  section.appendChild(cover)

  section.appendChild(document.createElement('br'))
  section.appendChild(document.createElement('br'))
  return section
}
