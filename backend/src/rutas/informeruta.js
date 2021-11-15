var express = require('express')
var router = express.Router()

var InformeModel = require('../modelos/informemodel')

module.exports = function(){

    router.post('/asistencia', function(req, res){
        var parametros = {
            id: req.body.id,
            fechaInicio: req.body.fechaInicio,
            fechaFin: req.body.fechaFin
        }
        InformeModel.postInformeAsistencia(parametros, function(error, data){
            if(data){
                res.status(200).json(data)
            }else{
                res.status(500).send({error:"pailas"})
            }
        })
    })

    router.get('/prestamo/:id', function(req, res){
        var id = req.params.id
        
        if(!isNaN(id)){
            InformeModel.getInformePrestamo(id, function(error, data){
                if(typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data)
                }else{
                    res.json(404, {"masistenciassg":"No hay registro de prestamos entre las fechas"})
                }
            })
        }else{
            res.status(500).json({"msg":"No es un numero"})
        }
    })

    return router
}