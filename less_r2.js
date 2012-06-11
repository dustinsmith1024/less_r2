/*
    Simple command line script to take a less file 
    and convert it to css and right-to-left adjust it.
    
    Requires less and r2
        http://lesscss.org/
        https://github.com/ded/R2
*/
var fs = require('fs'),
    r2 = require('r2'),
    less = require('less'),
    path = require('path');

process.on('uncaughtException', function(err) {
    console.log('Uncaught', err);
});

module.exports.exec = function (args) {
  var read = args[0],
      out = args[1];
  var read = path.resolve(process.cwd(), read);
  var data = fs.readFileSync(read, 'utf8');

  //Setup options for less parsing
  var parser = new(less.Parser)({
    paths: [path.dirname(read)]
  });

  //Parse it out to the file
  parser.parse(data, function (e, tree) {
      if (out) {
          fs.writeFileSync(out, r2.swap(tree.toCSS()), 'utf8');
      } else {
          //If not file specified then just put to STDIO
          console.log(r2.swap(tree.toCSS()));
      }
  });
}
