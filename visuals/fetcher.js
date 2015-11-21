var exec = require('child_process').exec

module.exports = function (term, cb) {
  exec('fim "' + term + '" -d imgs/' + term.replace(/\s/g, '_') + ' -n 10 -p "' + term +'"', function (error, stdout, stderr) {
    // this would print the current directory
    console.log(stdout)
    cb()
    // probably some callback hell here
  });
}
