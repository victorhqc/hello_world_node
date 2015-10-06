
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));
var env = process.env.ENV || 'local';
var envMessage = 'Running application in ' + env + ' mode';
var then = new Date();

app.get('/', function(req, res) {
    var now = new Date();
    var seconds = Math.abs((then.getTime() - now.getTime()) / 1000);

    var response = {
        now: now,
        upTime: seconds + ' seconds',
        env: envMessage
    };

    res.setHeader('Cache-Control', 'no-cache');
    res.json(response);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
  console.log(envMessage);
});
