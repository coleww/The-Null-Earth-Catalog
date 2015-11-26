var pick = function (arr) {
  if (!arr || !arr.length) throw arr.join(' ')
  return arr[~~(Math.random() * arr.length)]
}
var imageMap = require('./imageMap')
var cap = require('capitalize')

var absence = require('./actors/absence')
var baes = require('./actors/baes')
var snake_oil = require('./actors/snake_oil')
var snowballer = require('./actors/snowballer')

var imageMap = require('./imageMap')

var actors = [absence, baes, snake_oil, snowballer]
module.exports = function (name, num, topics) {
  var section = document.createElement('section') // nice semantics here
  section.className = 'section'


  var cover = document.createElement('center') // nice semantics here
  cover.className = 'page'

  var heading  = document.createElement('h1')
  heading.textContent = name
  cover.appendChild(heading)

  for (var i = 0; i < 4; i++) {
    var subImage = document.createElement('img')
    subImage.className = 'section--img'
    subImage.src = pick(pick(imageMap))
    cover.appendChild(subImage)

    if (i == 1) {
      cover.appendChild(document.createElement('br'))
    }
  }


  section.appendChild(cover)

  for (var i = 0; i < 7; i++) {


    for (var j = 0; j < 20; j++) {
      var item = document.createElement('div')
      item.className = 'item--thing'
      item.style.display = 'inline-block'


      var actor = pick(actors)
      var itemImg = document.createElement('img')
      itemImg.className = 'item--img'
      itemImg.src = pick(pick(imageMap))
      item.appendChild(itemImg)

      var text = document.createElement('h' + (~~(Math.random() * 5) + 2))
      text.textContent = actor((~~(Math.random() * 7) + 3))
      item.appendChild(itemImg)
      item.appendChild(text)
      if (Math.random() < 0.75) {
        var summary = document.createElement('center')
        summary.textContent = actor((~~(Math.random() * 12) + 7))

        item.style.border = ~~(Math.random() * 4) +  1 + 'px ' + pick(['dashed', 'solid']) + ' ' + pick(['black', 'gray'])
        item.style.width = 15 + ~~(Math.random() * 9) + '%'
        item.style.height = 9 + ~~(Math.random() * 5) + '%'
        item.appendChild(summary)
      } else if (Math.random() < 0.5) {
        var list = document.createElement('ol')
        list.className = 'item--list'
        topics.forEach(function (topic) {
          var el = document.createElement('li')
          el.textContent = actor((~~(Math.random() * 12) + 7))
          list.appendChild(el)
        })
        item.style.border = ~~(Math.random() * 4) +  1 + 'px ' + pick(['dashed', 'solid']) + ' ' + pick(['black', 'gray'])
        item.style.width = 15 + ~~(Math.random() * 9) + '%'
        item.style.height = 10 + ~~(Math.random() * 7) + '%'
        item.appendChild(list)
      } else {
        var author = document.createElement('h5')
        author.textContent = 'by ' + actor(3).split(' ').map(function (w) {return cap(w)})
        var opEd = document.createElement('div')
        opEd.textContent = [1,2,3,4,5,6,7,8,9,10,11,12].map(function (i) {
          return actor(i + ~~(Math.random() * 25))
        }).join('. ')
        item.style.border = ~~(Math.random() * 4) +  1 + 'px ' + pick(['dashed', 'solid']) + ' ' + pick(['black', 'gray'])
        item.style.width = 25 + ~~(Math.random() * 10) + '%'
        item.style.height = 12 + ~~(Math.random() * 12) + '%'
        item.appendChild(author)
        item.appendChild(opEd)
      }
      section.appendChild(item)
    }

  }
  return section
}
