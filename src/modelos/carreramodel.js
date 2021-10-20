var connection = require('../conexion/index')
var CarreraModel = {}

CarreraModel.insertCarrera = function(CarreraData, callback){
    if(connection){
        var sql = "INSERT INTO ct_carreras SET ?"
        connection.query(sql, CarreraData, function(error, result){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro insertado"})
            }
        })
    }
}

CarreraModel.getCarrera = function(id, callback){
    if(connection){
        var sql = "SELECT * FROM ct_carreras WHERE id_carrera="+connection.escape(id)+";"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

CarreraModel.updateCarrera = function(CarreraData, callback){
    if(connection){
        var sql = "UPDATE ct_carreras SET "
        +"nombre="+connection.escape(CarreraData.nombre)
        +" WHERE id_carrera="+connection.escape(CarreraData.id_carrera)+";"
        connection.query(sql, function(error, result){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro actualizado"})
            }
        })
    }
}

CarreraModel.getCarreras = function(callback){
    if(connection){
        var sql = "SELECT * FROM ct_carreras"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

module.exports = CarreraModel