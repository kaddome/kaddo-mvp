var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser')
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
  if (req.url.lastIndexOf('/mvp') == 0) {
    req.url = '/mvp.html';
  }
  next();
});

app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



app.post('/contact', function (req, res) {
    var smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "info.hoozad@gmail.com ",
            pass: "Passw0rdH00zad"
        }
    });
    
    var mailOptions = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', 
      to: 'info.hoozad@gmail.com',
      subject: 'Website contact form',
      text: req.body.name + ' - ' + req.body.email + '\n\n' + req.body.message 
    }
  
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }
        res.sendStatus(200)
    });
    
});
