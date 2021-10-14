var express = require('express')
var router = express.Router()

var CarreraModel = require('../modelos/carreramodel') 

module.exports = function(){
    
    router.post('/', function(req, res){
        var CarreraData = {
            id_carrera: null,
            nombre: req.body.nombre,
        }

        CarreraModel.insertCarrera(CarreraData, function(error, data){
            if(data){
                res.status(200).json(data)
            }else{
                res.status(500).send({error:":("})
            }
        })
    })

    router.get('/:id', function(req, res){
        var id = req.params.id

        if(!isNaN(id)){
            CarreraModel.getCarrera(id, function(error,data){
                if(typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data)
                }else{
                    res.json(404, {"msg":"Registro no existe"})
                }
            })
        }else{
            res.status(500).json({"msg":"Registro no existe"})
        }
    })

    router.put('/', function(req, res){
        var CarreraData={
            id_carrera: req.body.id_carrera,
            nombre: req.body.nombre,
        }

        CarreraModel.updateCarrera(CarreraData, function(error, data){
            if(data && data.msg){
                res.status(200).json(data)
            }else{
                res.status(500).send({error:":("})
            }
        })
    })

    router.get('/',function(req, res){
        CarreraModel.getCarreras(function(error, data){
            res.status(200).json(data)
        })
    })

    return router
}