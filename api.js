const dbcategory = require('./dbcategory');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.route('/category').get((request,response) => {
    dbcategory.getCategory().then( result =>{

        response.json(result[0]);
    });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('category API inciado de puerto: ' + port );