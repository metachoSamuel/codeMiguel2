var connection = require('../conexion/index')
var AsistenciaModel={}

AsistenciaModel.getAsistencias=function(callback){
    if(connection){
        var sql = "SELECT * FROM `tb_asistencias`"

        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

AsistenciaModel.getAsistencia=function(id, callback){
    if(connection){
        var sql = "SELECT * FROM tb_asistencias WHERE id_asistencia="+connection.escape(id)+";"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

AsistenciaModel.insertAsistencia=function(AsistenciaData, callback){
    if(connection){
        var sql="INSERT INTO tb_asistencias SET ?"
        connection.query(sql, AsistenciaData, function(error, result){
            if(error){
                throw error
            }else{
                callback(null, {"msg": "Registro Insertado"})
            }
        })
    }
}

AsistenciaModel.updatePersona = function(AsistenciaData, callback){
    if(connection){
        var sql = "UPDATE tb_asistencias SET "
        + " fecha = " + connection.escape(AsistenciaData.fecha)
        + ", observaciones = " + connection.escape(AsistenciaData.observaciones)
        + ", estado = " + connection.escape(AsistenciaData.estado)
        + ", id_persona = " + connection.escape(AsistenciaData.id_persona)
        + ", id_materia = " + connection.escape(AsistenciaData.id_materia)
        + " WHERE  id_asistencia  =  " + connection.escape(AsistenciaData.id_asistencia) + ";";

        connection.query(sql, function(error, result){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro actualizado"})
            }
        })
    }
}

module.exports = AsistenciaModel