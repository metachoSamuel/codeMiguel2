var connection = require('../conexion/index')
var PersonaModel = {}

PersonaModel.getPersonas = function (callback) {
    if (connection) {
        var sql = "SELECT * FROM tb_personas;"

        connection.query(sql, function (error, row) {
            if (error) {
                throw error
            } else {
                callback(null, row)
            }
        })
    }
}

PersonaModel.getPersona = function(id, callback){
    if (connection){
        var sql = "SELECT * FROM tb_personas WHERE id_persona="+connection.escape(id)+";"
        connection.query(sql, function(error, row){
            if (error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

PersonaModel.insertPersona = function(PersonaData, callback){
    if(connection){
        var sql="INSERT INTO tb_personas SET ?"
        connection.query(sql, PersonaData, function(error, result){
            if(error){
                throw error
            }else{
                callback(null, {"msg": "Registro Insertado"})
            }
        })
    }
}

PersonaModel.updatePersona= function(PersonaData, callback){
    if (connection){
        var sql="UPDATE tb_personas SET "
        + " nombre_1 = " + connection.escape(PersonaData.nombre_1)
        + ", nombre_2 = " + connection.escape(PersonaData.nombre_2)
        + ", apellido_1 = " + connection.escape(PersonaData.apellido_1)
        + ", apellido_2 = " + connection.escape(PersonaData.apellido_2)
        + ", no_documento = " + connection.escape(PersonaData.no_documento)
        + ", tipo_persona = " + connection.escape(PersonaData.tipo_persona)
        + " WHERE  id_persona  =  " + connection.escape(PersonaData.id_persona) + ";";

        connection.query(sql, function(error, result){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro actualizado"})
            }
        })
    }
}

module.exports = PersonaModel
