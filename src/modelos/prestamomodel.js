var connection = require('../conexion/index')
var PrestamoModel = {}

PrestamoModel.insertPrestamo = function(PrestamoData, callback){
    if(connection){
        var sql = "INSERT INTO tb_prestamo SET ?"
        connection.query(sql, PrestamoData, function(error){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro insertado"})
            }
        })
    }
}

PrestamoModel.getPrestamo = function(id, callback){
    if(connection){
        var sql = "SELECT * FROM tb_prestamo WHERE id_prestamo="+connection.escape(id)+";"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

PrestamoModel.updatePrestamo= function(PrestamoData, callback){
    if(connection){
        var sql = "UPDATE tb_prestamo SET"
        +"fecha_prestamo="+connection.escape(PrestamoData.fecha_prestamo)
        +", fecha_entrega="+connection.escape(PrestamoData.fecha_entrega)
        +", id_persona="+connection.escape(PrestamoData.id_persona)
        +", id_elemento="+connection.escape(PrestamoData.id_elemento)+";"

        connection.query(sql, PrestamoData, function(error){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro actualizado"})
            }
        })
    }
}

PrestamoModel.getPrestamos=function(callback){
    if(connection){
        var sql="SELECT * FROM tb_prestamo;"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

module.exports = PrestamoModel