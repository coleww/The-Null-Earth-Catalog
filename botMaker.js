var topics = require('./toc')()
var uses = require('./uses')()





var allDem = topics.concat(uses)


allDem = allDem.concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem).concat(allDem)





allDem.forEach(function (topic, i) {

  document.body.appendChild(section(topic, i + 1, topics))


})




