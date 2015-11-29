








var cells = document.querySelectorAll('.item--thing')

var i = 0


window.setInterval(function () {
  html2canvas(cells[i++]).then(function(canvas) {
    canvas.toBlob(function(blob) {
      saveAs(blob, i + ".png");
    })
  })
}, 1000)