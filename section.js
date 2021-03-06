var pick = function (arr) {
  if (!arr || !arr.length) throw arr.join(' ')
  return arr[~~(Math.random() * arr.length)]
}

var imageMap = require('./imageMap')
var cap = require('capitalize')


        var fonts = ['Georgia, serif',
      '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      '"Times New Roman", Times, serif',
      'Arial, Helvetica, sans-serif',
      '"Arial Black", Gadget, sans-serif',
      '"Comic Sans MS", cursive, sans-serif',
      'Impact, Charcoal, sans-serif',
      '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
      'Tahoma, Geneva, sans-serif',
      '"Trebuchet MS", Helvetica, sans-serif',
      'Verdana, Geneva, sans-serif',
      '"Courier New", Courier, monospace',
      '"Lucida Console", Monaco, monospace']
var absence = require('./absence')
var baes = require('./baes')
var brewer = require('./brewer')
var britney = require('./britney')
var cleo = require('./cleo')


var bailey = require('./bailey')
var cyrus = require('./cyrus')
var meredith = require('./meredith')
var olivia = require('./olivia')

var donald = require('./donald')
var frederick = require('./frederick')
var yoga = require('./yoga')
var snake_oil = require('./snake_oil')
var snowballer = require('./snowballer')

var mary = require('./mary')
console.log('wtf')
var imageMap = require('./imageMap')

var actors = [absence, baes, brewer, britney, cleo, donald, frederick, mary, snake_oil, snowballer, yoga]
module.exports = function (name, num, topics, i) {
  console.log(name, num)
  var counter = 0
  var section = document.createElement('div') // nice semantics here

  section.className = 'section'
  console.log('doing a sec')
var aCoverPage = document.createElement('div')
  var cover = document.createElement('center') // nice semantics here
  cover.className = 'page'

  var heading  = document.createElement('h2')
  heading.textContent = name
  cover.appendChild(heading)

  for (var i = 0; i < 4; i++) {
    var subImage = document.createElement('img')
    subImage.className = 'section--img'
    subImage.style.width = '40%'
    subImage.style.height = '40%'
    subImage.src = pick(pick(imageMap))
    cover.appendChild(subImage)

    if (i == 1) {
      cover.appendChild(document.createElement('br'))
    }
  }


  aCoverPage.appendChild(cover)

    section.appendChild(aCoverPage)

  for (var i = 0; i < 12; i++) {
    console.log('making a page')
    var numy = 5 + ~~(Math.random() * 7)
    console.log('making', numy, 'entries')
    for (var j = 0; j < numy; j++) {
      var item = document.createElement('div')
      item.className = 'item--thing'
      item.style.display = 'inline-block'
      console.log('making item', j)

      var actor = pick(actors)
      var itemImg = document.createElement('img')
      itemImg.className = 'item--img'
      itemImg.style.width = 50 + ~~(Math.random() * 50) + '%'
      itemImg.src = pick(pick(imageMap))

      if (Math.random() < 0.2) {
        var o = ~~(Math.random() * 360) + 'deg'
        itemImg.style.imageOrientation = o
      } else if (Math.random() < 0.2) {
        itemImg.style.imageOrientation = 'flip'
      } else if (Math.random() < 0.2) {
        var o = ~~(Math.random() * 360) + 'deg'
        itemImg.style.imageOrientation = o + ' flip'
      }

      item.appendChild(itemImg)
      var text = document.createElement('h' + (~~(Math.random() * 5) + 2))
      text.textContent = actor((~~(Math.random() * 5) + 3))
      item.appendChild(itemImg)
      item.appendChild(text)
      if (Math.random() < 0.75) {
        var summary = document.createElement('center')

          summary.textContent = actor((~~(Math.random() * 5) + 7))


        item.style.border = ~~(Math.random() * 4) +  1 + 'px ' + pick(['dashed', 'solid']) + ' ' + pick(['black', 'gray'])
        item.style.width = 10 + ~~(Math.random() * 25) + '%'
        item.style.height = 10 + ~~(Math.random() * 25) + '%'
        item.appendChild(summary)
      } else if (Math.random() < 0.5) {
        var list = document.createElement(Math.random() < 0.5 ? 'ol' : 'ul')
        if (Math.random() < 0.3) list.style.listStyle = 'none'
        list.className = 'item--list'
         ;[1,2,3].forEach(function (topic) {
          var el = document.createElement('li')

            el.textContent = actor(~~(Math.random() * 5) + 7)
            list.appendChild(el)
        })
        item.style.border = ~~(Math.random() * 4) +  1 + 'px ' + pick(['dashed', 'solid']) + ' ' + pick(['black', 'gray'])
        item.style.width = 13 + ~~(Math.random() * 25) + '%'
        item.style.height = 10 + ~~(Math.random() * 25) + '%'
        item.appendChild(list)
      } else {
        var author = document.createElement('h5')
          author.textContent = 'by ' + actor(3).split(' ').map(function (w) {return cap(w)})
        var opEd = document.createElement('div')

        // async this somehow?
        ;[1,2,3].forEach(function (i) {

            var dee = document.createElement('span')
            dee.textContent = actor(i + ~~(Math.random() * 5))
            dee.style.fontWeight = 1 + ~~(Math.random() * 15) + 'px'
            dee.style.fontStyle = pick(['bold', 'italic', 'regular'])
            opEd.appendChild(dee)
        })
        item.style.border = ~~(Math.random() * 4) +  1 + 'px ' + pick(['dashed', 'solid']) + ' ' + pick(['black', 'gray'])
        item.style.width = 13 + ~~(Math.random() * 25) + '%'
        item.style.height = 10 + ~~(Math.random() * 25) + '%'
        item.appendChild(author)
        item.appendChild(opEd)
      }

        if (Math.random() < 0.2) {
          item.style.float = 'left'
        } else if (Math.random() < 0.2) {
          item.style.float = 'right'
        }
        if (Math.random() < 0.2) {
          item.style.borderRadius = ~~(Math.random() * 50) + 'px'
        }
        if (Math.random() < 0.75) {
          item.style.textAlign = pick(['left', 'center', 'right', 'justify'])
        }


        item.style.fontFamily = pick(fonts)

        if (Math.random() < 0.15) {
          item.style.textDecoration = pick(['underline', 'line-through'])
        }


      section.appendChild(item)
    }


  }
  console.log('down with dis sec')




  return section
}
