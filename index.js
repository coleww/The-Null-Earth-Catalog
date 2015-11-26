var catalog = document.createElement('div')
catalog.className = 'catalog'
var section = require('./section')
var topics = require('./toc')()
var uses = require('./uses')()


var pick = require('pick-random')
var imageMap = require('./imageMap')



var coverPage = require('./coverPage')()
catalog.appendChild(coverPage)

var tocPage = require('./tocPage')(topics)
catalog.appendChild(tocPage)

var usePage = require('./usePage')(uses)
catalog.appendChild(usePage)





var sections = topics.forEach(function (topic, i) {
  catalog.appendChild(section(topic, i + 1, topics))
})

// make index? glossary? closing page?



document.body.appendChild(catalog)
