var express = require('express')
var engines = require('consolidate')
var MongoClient = require('mongodb').MongoClient
var app = express();

app.engine('html', engines.nunjucks)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
// app.use(express.bodyParser())

function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).render('error_template', { error: err });
}
app.use(errorHandler);

var url = 'mongodb://localhost:27017/video';
MongoClient.connect(url, function(err, db) {
    console.log("Successfully connected to server");

    app.get('/', (req, res) => {
        console.log("process /");
        db.collection('movies').find({}).toArray(function(err, docs) {
            res.render('movies', {movies: docs})
        });
    });

    app.get('/:name', function(req, res, next) {
        console.log("process name");
        var name = req.params.name;
        var getvar1 = req.query.getvar1;
        var getvar2 = req.query.getvar2;
        res.render('hello', { name : name, getvar1 : getvar1, getvar2 : getvar2 });
    });

    let server = app.listen(3000, ()=>{
        let port = server.address().port
        console.log('express server listening on port %s', port)
    })
});

