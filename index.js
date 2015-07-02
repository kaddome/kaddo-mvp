var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {

  if (req.url.lastIndexOf('/') == 0) {
    req.url = '/index.html';
  }
  next();
});

app.use('/', express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


