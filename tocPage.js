
var pick = require('pick-random')
module.exports = function (topics) {


  var tocPage = document.createElement('section')
  tocPage.className = 'toc page'
  var centoc = document.createElement('center')
  var headline = document.createElement('h1')
  headline.className = 'toc--headline'
  headline.textContent = 'THEE NULLE EARTHE CATALOGE'
  centoc.appendChild(headline)


  var list = document.createElement('ol')
  list.className = 'toc--list'

  topics.forEach(function (topic) {
    var el = document.createElement('li')
    el.className = 'toc--header'
    el.textContent = topic.toUpperCase()
    list.appendChild(el)
  })


  centoc.appendChild(list)
  tocPage.appendChild(centoc)
  return tocPage
}