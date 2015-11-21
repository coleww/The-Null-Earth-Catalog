var catalog = document.createElement('div')
catalog.className = 'catalog'
var section = require('./section')
var topics = require('./toc')()
var uses = require('./uses')()
var makeSubtitle = require('./subtitle')


// hmm this should end up in its own file dir thing with the toc and sec and stuff....
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
var imgPath = './imgs/earth_from_space' + pick(fs.readdirSync('./imgs/earth_from_space'))[0]
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

var sections = topics.forEach(function (topic, i) {
  catalog.appendChild(section(topic, i + 1))
})

// make index? glossary? closing page?



