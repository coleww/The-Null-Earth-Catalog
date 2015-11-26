var catalog = document.createElement('div')
catalog.className = 'catalog'
var section = require('./section')
var topics = require('./toc')()
var uses = require('./uses')()
var makeSubtitle = require('./subtitle')
var missionStatement = require('./missionStatement')()

var pick = require('pick-random')


var coverPage = document.createElement('section')
coverPage.className = 'cover page'
var title = document.createElement('div')
title.className = 'cover--title'
title.textContent = 'THE NULL EARTH CATALOG'
coverPage.appendChild(title)
var subtitle = document.createElement('div')
subtitle.className = 'cover--subtitle'
subtitle.textContent = makeSubtitle()
coverPage.appendChild(subtitle)

var earths =    [
    "./imgs/earth_from_space/PROC-earth from space0.jpg",
    "./imgs/earth_from_space/PROC-earth from space1.jpg",
    "./imgs/earth_from_space/PROC-earth from space11.png",
    "./imgs/earth_from_space/PROC-earth from space12.jpg",
    "./imgs/earth_from_space/PROC-earth from space13.jpg",
    "./imgs/earth_from_space/PROC-earth from space14.jpg",
    "./imgs/earth_from_space/PROC-earth from space15.jpg",
    "./imgs/earth_from_space/PROC-earth from space16.jpg",
    "./imgs/earth_from_space/PROC-earth from space17.jpg",
    "./imgs/earth_from_space/PROC-earth from space18.jpg",
    "./imgs/earth_from_space/PROC-earth from space19.jpg",
    "./imgs/earth_from_space/PROC-earth from space2.jpg",
    "./imgs/earth_from_space/PROC-earth from space20.jpg",
    "./imgs/earth_from_space/PROC-earth from space21.jpg",
    "./imgs/earth_from_space/PROC-earth from space22.jpg",
    "./imgs/earth_from_space/PROC-earth from space23.jpg",
    "./imgs/earth_from_space/PROC-earth from space24.jpg",
    "./imgs/earth_from_space/PROC-earth from space3.jpg",
    "./imgs/earth_from_space/PROC-earth from space4.jpg",
    "./imgs/earth_from_space/PROC-earth from space5.jpg",
    "./imgs/earth_from_space/PROC-earth from space6.jpg",
    "./imgs/earth_from_space/PROC-earth from space7.jpg",
    "./imgs/earth_from_space/PROC-earth from space8.jpg",
    "./imgs/earth_from_space/PROC-earth from space9.jpg",
    "./imgs/earth_from_space/demo.jpg"
  ]
var imgPath = pick(earths)[0]
var theEarth = document.createElement('img')
theEarth.className = 'cover--img'
theEarth.src = imgPath
coverPage.appendChild(theEarth)

var season = pick(['SUMMER', 'FALL', 'WINTER', 'SPRING', 'PRE-WINTER', 'POST-SUMMER', 'EARLY-SPRING', 'TRUST FALLS'])[0]
var a = (Math.random() < 0.66) ? '1' : '2'
var b = (a == '2') ? '0' : ((Math.random() < 0.8) ? '9' : ~~(Math.random() * 10))
var c = (a == '2') ? ((Math.random() < 0.6) ? 0 : 1) : ~~(Math.random() * 10)
var d = ~~(Math.random() * 10)
var year = a + b + c + d
var edition = document.createElement('div')
edition.className = 'cover--edition'
edition.textContent = season + ', ' + year
coverPage.appendChild(edition)



catalog.appendChild(coverPage)










var tocPage = document.createElement('section')
tocPage.className = 'toc page'

var headline = document.createElement('h1')
headline.className = 'toc--headline'
headline.textContent = 'THEE NULLE EARTHE CATALOGE'
tocPage.appendChild(headline)


var list = document.createElement('ol')
list.className = 'toc--list'

topics.forEach(function (topic) {
  var el = document.createElement('li')
  el.className = 'toc--header'
  el.textContent = topic.toUpperCase()
  list.appendChild(el)
})


tocPage.appendChild(list)

catalog.appendChild(tocPage)




var usePage = document.createElement('section')
usePage.className = 'use page'

var headline = document.createElement('h1')
headline.className = 'use--headline'
headline.textContent = 'HOW 2 USE THIS TEXT'
usePage.appendChild(headline)


var list = document.createElement('ol')
list.className = 'use--list'

uses.forEach(function (use) {
  var el = document.createElement('li')
  el.className = 'use--header'
  el.textContent = use.toUpperCase()
  list.appendChild(el)
})

usePage.appendChild(list)

var theMission = document.createElement('blockquote')
theMission.className = 'use--mission'
theMission.textContent = missionStatement
usePage.appendChild(theMission)




catalog.appendChild(usePage)





var sections = topics.forEach(function (topic, i) {
  catalog.appendChild(section(topic, i + 1))
})

// make index? glossary? closing page?



document.body.appendChild(catalog)
