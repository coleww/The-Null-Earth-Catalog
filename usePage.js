
var pick = require('pick-random')
var imageMap = require('./imageMap')
var missionStatement = require('./missionStatement')()
module.exports = function (uses) {


  var usePage = document.createElement('section')
  usePage.className = 'use page'



  var cento = document.createElement('center')
  var headline = document.createElement('h4')
  headline.className = 'use--headline'
  headline.textContent = 'HOW 2 USE THIS TEXT'
  cento.appendChild(headline)

  var headline = document.createElement('h5')
  headline.textContent = 'AN ITEM IS DEEMED WORTHY OF PRESENCE IN THE NULL EARTH CATALOG IF IT FULFILLS ANY COMBINATION OF THE FOLLOWING DUTIES:'
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

    var headline = document.createElement('h7')
  headline.textContent = 'THE ROBOTS MAY DESTROY THE NULL EARTH AT ANY MOMENT. CHERISH YR EXISTENCE, FRAGILE MEAT CREATURE!'
  cento.appendChild(headline)

  var subImage = document.createElement('img')
  subImage.className = 'use--img'
  subImage.src = pick(pick(imageMap)[0])[0]
  cento.appendChild(subImage)


    var headline = document.createElement('h6')
  headline.textContent = 'OUR MISSION:'
  cento.appendChild(headline)
  var theMission = document.createElement('div')
  theMission.className = 'use--mission'
  theMission.textContent = missionStatement
  cento.appendChild(theMission)
  usePage.appendChild(cento)
  return usePage
}