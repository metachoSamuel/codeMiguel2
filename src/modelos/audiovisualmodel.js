var connection = require('../conexion/index')
var AudioVisualModel = {}

AudioVisualModel.insertAudioVisual = function(AudioVisualData, callback){
    if(connection){
        var sql = "INSERT INTO ct_audio_visual SET ?"
        connection.query(sql, AudioVisualData, function(error){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro insertado"})
            }
        })
    }
}

AudioVisualModel.getAudioVisual = function(id, callback){
    if(connection){
        var sql = "SELECT * FROM ct_audio_visual WHERE id_elemento="+connection.escape(id)+";"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

AudioVisualModel.updateAudioVisual = function(AudioVisualData, callback){
    if(connection){
        var sql = "UPDATE ct_audio_visual SET "
        +"elemento="+connection.escape(AudioVisualData.elemento)
        +", estado="+connection.escape(AudioVisualData.estado)
        +" WHERE id_elemento="+connection.escape(AudioVisualData.id_elemento)+";"
        
        connection.query(sql, function(error){
            if(error){
                throw error
            }else{
                callback(null, {"msg":"Registro actualizado"})
            }
        })
    }
}

AudioVisualModel.getAudioVisuales = function(callback){
    if(connection){
        var sql = "SELECT * FROM ct_audio_visual;"
        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

module.exports = AudioVisualModel