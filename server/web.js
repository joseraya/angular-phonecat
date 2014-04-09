'use strict';

var
express = require('express'),
    http = require('http');

var app = express();

app.get('/app/*', function (req, res) {

    if (req.query._escaped_fragment_) {
        console.log(req.query._escaped_fragment_);
        res.send("Your phones should be here");
        res.end();
    } else {
        res.sendfile(req.originalUrl, {
            root: __dirname + '/../'
        });
    }
});

app.use(express.static(__dirname + '/..'));

http.createServer(app).listen(process.env.PORT || 4000);