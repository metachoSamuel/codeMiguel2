var connection = require('../conexion/index')

var TipDocModel = {}

TipDocModel.getTipDocs = function(callback){
    var sql="SELECT * FROM `ct_tipos_documentos`"
    
    connection.query(sql, function(error, row){
        if(error){
            throw error
        }else{
            callback(null, row)
            //callback(null, JSON.stringify(rows))
        }
    });
}

TipDocModel.getTipDoc = function (id, callback) {

}

TipDocModel.insertTipDoc = function (TipDocData, callback) {

}

TipDocModel.updateTipDoc = function(TipDocData, callback){

}

module.exports = TipDocModel