var connection = require('../conexion/index')

var TipDocModel = {}

TipDocModel.getTipDocs = function(callback){
    var sql="SELECT `id_tip_doc`, `tipo_documento`, `iniciales_tip_doc` FROM `ct_tipos_documentos`"
    
    connection.query(sql, function(error, rows){
        if(error){
            throw error
        }else{
            callback(null, rows)
        }
    });
}

TipDocModel.getTipDoc = function(id, callback){

}

TipDocModel.insertTipDoc = function(TipDocData, callback){

}

TipDocModel.updateTipDoc = function(TipDocData, callback){

}

module.exports = TipDocModel