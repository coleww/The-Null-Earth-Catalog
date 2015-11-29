var catalog = document.createElement('div')
catalog.className = 'catalog'
var section = require('./section')
var topics = require('./toc')()
var uses = require('./uses')()
catalog.appendChild(require('./coverPage')())
catalog.appendChild(require('./tocPage')(topics))
catalog.appendChild(require('./usePage')(uses))
var sections = topics.forEach(function (topic, i) {
  catalog.appendChild(section(topic, i + 1, topics))
})
console.log('done dem secs')
catalog.appendChild(require('./finalPage')())
// make index? glossary? closing page?
document.body.appendChild(catalog)
console.log('we made it, ok')