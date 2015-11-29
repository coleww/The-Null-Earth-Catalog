var catalog = document.createElement('div')
document.body.appendChild(catalog)
catalog.className = 'catalog'
var section = require('./section')
var topics = require('./toc')()
var uses = require('./uses')()
var cov = require('./coverPage')()
cov.style.width = '100%'
cov.style.height = '100%'
cov.style.color = 'gray'
cov.style.backgroundColor = 'black'
catalog.appendChild(cov)
var tops = require('./tocPage')(topics)

tops.appendChild(require('./usePage')(uses))
catalog.appendChild(tops)
var sections = topics.forEach(function (topic, i) {
  catalog.appendChild(section(topic, i + 1, topics))
})
console.log('done dem secs')
catalog.appendChild(require('./finalPage')())
// make index? glossary? closing page?

console.log('we made it, ok')