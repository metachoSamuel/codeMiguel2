var connection = require('../conexion/index')
var PrestamoModel = {}

PrestamoModel.insertPrestamo = function(PrestamoData, callback){
    if(connection){
        var sql = "INSERT INTO tb_prestamos SET ?"
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
        var sql = "SELECT * FROM tb_prestamos WHERE id_prestamo="+connection.escape(id)+";"
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
        var sql = "UPDATE tb_prestamos SET"
        +"fecha_prestamo="+connection.escape(PrestamoData.fecha_prestamo)
        +", fecha_entrega="+connection.escape(PrestamoData.fecha_entrega)
        +", id_persona="+connection.escape(PrestamoData.id_persona)
        +", id_elemento="+connection.escape(PrestamoData.id_elemento)
        +" WHERE id_prestamo="+connection.escape(PrestamoData.id_prestamo)+";"

        connection.query(sql, function(error){
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
        var sql="SELECT * FROM tb_prestamos;"
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