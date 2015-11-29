var imageMap = require('./imageMap')
var pick = require('pick-random')
module.exports = function () {
  console.log("FINALLY")

  var tocPage = document.createElement('section')
  tocPage.className = 'page'
  var centoc = document.createElement('center')
  var headline = document.createElement('h1')
  headline.className = 'toc--headline'
  headline.textContent = 'THEE ENDE'
  centoc.appendChild(headline)
   var subImage = document.createElement('img')
    subImage.className = 'section--img'
    subImage.src = pick(pick(imageMap)[0])[0]
    subImage.style.width = '100%'
    subImage.style.height = '80%'
    centoc.appendChild(subImage)


  tocPage.appendChild(centoc)
  return tocPage
}