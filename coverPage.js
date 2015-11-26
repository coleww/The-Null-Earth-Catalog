
var makeSubtitle = require('./subtitle')
var pick = require('pick-random')
module.exports = function () {
    var coverPage = document.createElement('section')
    coverPage.className = 'cover page'
    var title = document.createElement('div')
    title.className = 'cover--title'
    title.textContent = 'THE NULL EARTH CATALOG'
    coverPage.appendChild(title)
    var subtitle = document.createElement('div')
    subtitle.className = 'cover--subtitle'
    subtitle.textContent = makeSubtitle()
    coverPage.appendChild(subtitle)

    var earths =    [
        "./imgs/earth_from_space/PROC-earth from space0.jpg",
        "./imgs/earth_from_space/PROC-earth from space1.jpg",
        "./imgs/earth_from_space/PROC-earth from space11.png",
        "./imgs/earth_from_space/PROC-earth from space12.jpg",
        "./imgs/earth_from_space/PROC-earth from space13.jpg",
        "./imgs/earth_from_space/PROC-earth from space14.jpg",
        "./imgs/earth_from_space/PROC-earth from space15.jpg",
        "./imgs/earth_from_space/PROC-earth from space16.jpg",
        "./imgs/earth_from_space/PROC-earth from space17.jpg",
        "./imgs/earth_from_space/PROC-earth from space18.jpg",
        "./imgs/earth_from_space/PROC-earth from space19.jpg",
        "./imgs/earth_from_space/PROC-earth from space2.jpg",
        "./imgs/earth_from_space/PROC-earth from space20.jpg",
        "./imgs/earth_from_space/PROC-earth from space21.jpg",
        "./imgs/earth_from_space/PROC-earth from space22.jpg",
        "./imgs/earth_from_space/PROC-earth from space23.jpg",
        "./imgs/earth_from_space/PROC-earth from space24.jpg",
        "./imgs/earth_from_space/PROC-earth from space3.jpg",
        "./imgs/earth_from_space/PROC-earth from space4.jpg",
        "./imgs/earth_from_space/PROC-earth from space5.jpg",
        "./imgs/earth_from_space/PROC-earth from space6.jpg",
        "./imgs/earth_from_space/PROC-earth from space7.jpg",
        "./imgs/earth_from_space/PROC-earth from space8.jpg",
        "./imgs/earth_from_space/PROC-earth from space9.jpg",
        "./imgs/earth_from_space/demo.jpg"
      ]
    var imgPath = pick(earths)[0]
    var theEarth = document.createElement('img')
    theEarth.className = 'cover--img'
    theEarth.src = imgPath
    coverPage.appendChild(theEarth)

    var season = pick(['SUMMER', 'FALL', 'WINTER', 'SPRING', 'PRE-WINTER', 'POST-SUMMER', 'EARLY-SPRING', 'TRUST FALLS'])[0]
    var a = (Math.random() < 0.66) ? '1' : '2'
    var b = (a == '2') ? '0' : ((Math.random() < 0.8) ? '9' : ~~(Math.random() * 10))
    var c = (a == '2') ? ((Math.random() < 0.6) ? 0 : 1) : ~~(Math.random() * 10)
    var d = ~~(Math.random() * 10)
    var year = a + b + c + d
    var edition = document.createElement('div')
    edition.className = 'cover--edition'
    edition.textContent = season + ', ' + year
    coverPage.appendChild(edition)
    return coverPage
}