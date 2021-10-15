var express = require('express')
var router = express.Router()

var PrestamoModel = require('../modelos/prestamomodel')

module.exports = function(){

    router.post('/', function(req, res){
        var PrestamoData = {
            id_prestamo: null,
            fecha_prestamo: req.body.fecha_prestamo,
            fecha_entrega: req.body.fecha_entrega,
            id_persona: req.body.id_persona,
            id_elemento: req.body.id_elemento,
        }

        PrestamoModel.insertPrestamo(PrestamoData, function(error, data){
            if(data){
                res.status(200).json(data)
            }else{
                res.status(500).send({error: "Pailas"})
            }
        })
    })

    router.get('/:id', function(req, res){
        var id = req.params.id

        if(!isNaN(id)){
            PrestamoModel.getPrestamo(id, function(error, data){
                if(typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data)
                }else{
                    res.json(404, {"msg":"Registro no existe"})
                }
            })
        }else{
            res.status(500).json({"msg":"No es un numero"})
        }
    })

    router.put('/', function(req, res){
        var PrestamoData={
            id_prestamo: req.body.id_prestamo,
            fecha_prestamo: req.body.fecha_prestamo,
            fecha_entrega: req.body.fecha_entrega,
            id_persona: req.body.id_persona,
            id_elemento: req.body.id_elemento,
        }

        PrestamoModel.updatePrestamo(PrestamoData, function(error, data){
            if(data && data.msg){
                res.status(200).json(data)
            }else{
                res.status(500).send({error: ":("})
            }
        })
    })

    router.get('/', function(req, res){
        PrestamoModel.getPrestamos(function(error, data){
            res.status(200).json(data)
        })
    })

    return router
}