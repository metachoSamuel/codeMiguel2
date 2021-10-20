var connection = require('../conexion/index')
var ContactoModel = {}
var sql

ContactoModel.insertContacto = function(ContactoData, callback){
    if(connection){
        sql = "INSERT INTO ct_contactos SET ?"
        connection.query(sql, ContactoData, function(error){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro insertado"})
            }
        })
    }
}

ContactoModel.getContacto = function(id, callback){
    if(connection){
        sql = "SELECT * FROM ct_contactos WHERE id_contacto="+connection.escape(id)+";"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

ContactoModel.updateContacto = function(ContactoData, callback){
    if(connection){
        sql = "UPDATE ct_contactos SET"
        +"tipo_contacto="+connection.escape(ContactoData.tipo_contacto)
        +", dato_contacto="+connection.escape(ContactoData.dato_contacto)
        +", prioridad_contacto="+connection.escape(ContactoData.prioridad_contacto)
        +", id_persona="+connection.escape(ContactoData.id_persona)
        +" WHERE id_contacto="+connection.escape(ContactoData.id_contacto)+";"

        connection.query(sql, ContactoData, function(error){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"REgistro actualizado"})
            }
        })
    }
}

ContactoModel.getContactos = function(callback){
    if(connection){
        sql = "SELECT * FROM ct_contactos;"
        connection.query(sql, function(error,row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

module.exports = ContactoModel