
var pick = require('pick-random')
var imageMap = require('./imageMap')
var missionStatement = require('./missionStatement')()
module.exports = function (uses) {


  var usePage = document.createElement('section')
  usePage.className = 'use page'



  var cento = document.createElement('center')
  var headline = document.createElement('h1')
  headline.className = 'use--headline'
  headline.textContent = 'HOW 2 USE THIS TEXT'
  cento.appendChild(headline)


  var list = document.createElement('ol')
  list.className = 'use--list'

  uses.forEach(function (use) {
    var el = document.createElement('li')
    el.className = 'use--header'
    el.textContent = use.toUpperCase()
    list.appendChild(el)
  })

  cento.appendChild(list)

  var subImage = document.createElement('img')
  subImage.className = 'use--img'
  subImage.src = pick(pick(imageMap)[0])[0]
  cento.appendChild(subImage)

  var theMission = document.createElement('div')
  theMission.className = 'use--mission'
  theMission.textContent = missionStatement
  cento.appendChild(theMission)
  usePage.appendChild(cento)
  return usePage
}