var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) voi myös käyttää 
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
