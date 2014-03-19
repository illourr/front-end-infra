// Module dependencies
var express = require('express');

// Path to public directory
var pub = __dirname + '/public';

// Setup middleware
var app = express();
app.use(express.static(pub));

// Set views folder
app.set('views', __dirname + '/views');

// Set our default template engine to 'jade'
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');


// ROUTE: /
app.get('/', function(req, res) {
  res.render('index', { title: "HTML5 Slots" });
});

// change this to a better error handler in your code
// sending stacktrace to users in production is not good
app.use(function(err, req, res, next) {
  res.send(err.stack);
});

app.listen(3000);
console.log('Express app started on port 3000');