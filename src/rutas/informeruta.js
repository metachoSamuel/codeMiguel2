var express = require('express')
var router = express.Router()

var InformeModel = require('../modelos/informemodel')

module.exports = function(){

    router.get('/:id', function(req, res){
        var id = req.params.id

        if(!isNaN(id)){
            InformeModel.getInformeAsistencia(id, function(error, data){
                if(typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data)
                }else{
                    res.json(404, {"msg":"No hay registro de asistencias entre las fechas"})
                }
            })
        }else{
            res.status(500).json({"msg":"No es un numero"})
        }
    })

    return router
}