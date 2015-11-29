
var pick = require('pick-random')
module.exports = function () {


  var tocPage = document.createElement('section')
  tocPage.className = 'page'
  var centoc = document.createElement('center')
  var headline = document.createElement('h1')
  headline.className = 'toc--headline'
  headline.textContent = 'THEE ENDE'
  centoc.appendChild(headline)
   var subImage = document.createElement('img')
    subImage.className = 'section--img'
    subImage.src = pick(pick(imageMap))
    subImage.style.width = '100%'
    centoc.appendChild(subImage)


  centoc.appendChild(list)
  tocPage.appendChild(centoc)
  return tocPage
}