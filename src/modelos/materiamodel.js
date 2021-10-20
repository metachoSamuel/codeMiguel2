var connection = require('../conexion/index')
var MateriaModel={}

MateriaModel.insertMateria = function(MateriaData, callback){
    if(connection){
        var sql="INSERT INTO tb_materias SET ?"
        connection.query(sql, MateriaData, function(error, result){
            if(error){
                throw error
            }else{
                callback(null,{"msg":"Registro Insertado"})
            }
        })
    }
}

MateriaModel.getMateria=function(id, callback){
    if(connection){
        var sql="SELECT * FROM tb_materias WHERE id_materia="+connection.escape(id)+";"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

MateriaModel.updateMateria = function(MateriaData, callback){
    if(connection){
        var sql="UPDATE tb_materias SET "
        +" nombre="+connection.escape(MateriaData.nombre)
        +", id_carrera="+connection.escape(MateriaData.id_carrera)
        +"WHERE id_materia="+connection.escape(MateriaData.id_materia)+";"

        connection.query(sql, function(error, result){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro actualizado"})
            }
        })
    }
}

MateriaModel.getMaterias=function(callback){
    if(connection){
        var sql = "SELECT * FROM tb_materias"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

module.exports = MateriaModel