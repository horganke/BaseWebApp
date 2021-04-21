var express = require('express');
// use express
var app = express();
//create express app

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
//html folder for app template files

app.set('view engine', 'ejs');
//ejs templating language

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/about', function(request, response) {
  response.render('pages/about');
});
app.get('/project', function(request, response) {
  response.render('pages/project');
});
//what to do with the app gets a request

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
//binds it to port


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
