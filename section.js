var pick = require('pick-random')
var actorPaths = require('./actors').filter(function (p) { return !p.match(/^earth/)})
var actors = pick(actorPaths, {count: 7}).forEach(function (actor) {
  return require('./actors/' + actor)
})

module.exports = function (name, num) {
  var section = document.createElement('section') // nice semantics here
  section.className = 'section'
}
