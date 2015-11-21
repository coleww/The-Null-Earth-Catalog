var pick = require('pick-random')


module.exports = function () {
  return pick(["PURPOSE", "FUNCTION", "USE", "HOPES", "FEARS", "DREAMS", "CATS", "PORPOISE", "MAGIC",
               "ABSTRACT-EXPRESSIONISM", "ANTI-CAPITALISM", "NET ART", "TIPS FOR TWITTER", "EMPATHY",
               "LIBERATION", "MARXISM", "TOP 40 POP STARS"], {count: 3})
}