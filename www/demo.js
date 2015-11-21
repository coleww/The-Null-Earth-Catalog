var nullEarthCatalog = require('../')

document.getElementById('input').addEventListener('keyup', function (e) {
  document.getElementById('output').textContent = nullEarthCatalog(document.getElementById('input').value)
})
