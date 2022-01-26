var config = require('./dbconfig');
const sql = require('mssql');

async function getCategory(){

    try {
        
        let pool = await sql.connect( config );
        let category = await pool.request.query( "SELECT * FROM tm_categoria" );
        return category.recordsets;
    } catch (error) {
        console.warn( error );
    }
}

module.exports = {

    getCategory : getCategory
}