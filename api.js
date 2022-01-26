const dbcategory = require('./dbcategory');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const categoryModel = require('./category');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//lista de categorias
router.route('/category').get((request,response) => {
    dbcategory.getCategory().then( result =>{

        response.json(result[0]);
    });
});

//Categoría id
router.route('/category/:id').get((request,response) => {
    dbcategory.getCategoryXId( request.params.id).then( result =>{

        response.json(result[0]);
    });
});
//Category save
router.route('/category/save').post((request,response) => {

    let categoryData = {...request.body};
    dbcategory.insertCategory( categoryData ).then( result =>{

        response.json(result[0]);
    });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('category API inciado de puerto: ' + port );