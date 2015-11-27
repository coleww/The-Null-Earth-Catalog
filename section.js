var pick = function (arr) {
  if (!arr || !arr.length) throw arr.join(' ')
  return arr[~~(Math.random() * arr.length)]
}
var imageMap = require('./imageMap')
var cap = require('capitalize')

var absence = require('./absence')
var baes = require('./baes')
var snake_oil = require('./snake_oil')
var snowballer = require('./snowballer')

var imageMap = require('./imageMap')

var actors = [absence]//, baes, snake_oil, snowballer]
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

    var numy = 10 + ~~(Math.random() * 10)
    for (var j = 0; j < numy; j++) {
      var item = document.createElement('div')
      item.className = 'item--thing'
      item.style.display = 'inline-block'


      var actor = pick(actors)
      var itemImg = document.createElement('img')
      itemImg.className = 'item--img'
      itemImg.src = pick(pick(imageMap))
      item.appendChild(itemImg)

      var text = document.createElement('h' + (~~(Math.random() * 5) + 2))
      actor((~~(Math.random() * 7) + 3), function (str) {
        text.textContent = str
      })
      item.appendChild(itemImg)
      item.appendChild(text)
      if (Math.random() < 0.75) {
        var summary = document.createElement('center')
        actor((~~(Math.random() * 12) + 7), function (str) {
          summary.textContent = str
        })

        item.style.border = ~~(Math.random() * 4) +  1 + 'px ' + pick(['dashed', 'solid']) + ' ' + pick(['black', 'gray'])
        item.style.width = 15 + ~~(Math.random() * 9) + '%'
        item.style.height = 9 + ~~(Math.random() * 5) + '%'
        item.appendChild(summary)
      } else if (Math.random() < 0.5) {
        var list = document.createElement('ol')
        list.className = 'item--list'
        topics.forEach(function (topic) {
          var el = document.createElement('li')
          actor(~~(Math.random() * 12) + 7, function (str) {
            el.textContent = str
            list.appendChild(el)
          })
        })
        item.style.border = ~~(Math.random() * 4) +  1 + 'px ' + pick(['dashed', 'solid']) + ' ' + pick(['black', 'gray'])
        item.style.width = 15 + ~~(Math.random() * 9) + '%'
        item.style.height = 10 + ~~(Math.random() * 7) + '%'
        item.appendChild(list)
      } else {
        var author = document.createElement('h5')
        actor(3, function (str) {
          author.textContent = 'by ' + str.split(' ').map(function (w) {return cap(w)})
        })
        var opEd = document.createElement('div')

        // async this somehow?
        ;[1,2,3,4,5,6,7,8,9,10,11,12].forEach(function (i) {
          actor(i + ~~(Math.random() * 25), function (str) {
            var dee = document.createElement('span')
            dee.textContent = str
            dee.style.fontWeight = 10 + ~~(Math.random() * 15) + 'px'
            dee.style.fontStyle = pick(['bold', 'italic', 'regular'])
            opEd.appendChild(dee)
          })
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
