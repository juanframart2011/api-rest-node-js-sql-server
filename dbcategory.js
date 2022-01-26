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

async function getCategoryXId( id ){

    try {
        
        let pool = await sql.connect( config );
        let category = await pool.request()
        .input('input_parameter', sql.Int, id)
        .query( "SELECT * FROM tm_categoria where cat_id=@input_parameter" );
        return category.recordsets;
    } catch (error) {
        console.warn( error );
    }
}

async function insertCategory( category ){

    try {
        
        let pool = await sql.connect( config );
        let insertCategory = await pool.request()
        .input('cat_id', sql.Int, category.cat_id)
        .input('cat_nom', sql.Int, category.cat_nom)
        .input('cat_obs', sql.Int, category.cat_obs)
        .execute( "insert_category" );
        return insertCategory.recordsets;
    } catch (error) {
        console.warn( error );
    }
}

module.exports = {

    getCategory : getCategory,
    getCategoryXId: getCategoryXId,
    insertCategory: insertCategory
}