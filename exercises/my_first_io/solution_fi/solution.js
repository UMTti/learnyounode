var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// muista että voit välttää .toString() -metodia antamalla 'utf8' 
// toisena argumenttina readFileSync -funktiolle, sitten saat lopputulokseksi Stringin!

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
