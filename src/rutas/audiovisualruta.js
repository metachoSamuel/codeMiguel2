var express = require('express')
var router = express.Router()

var AudioVisualModel = require('../modelos/audiovisualmodel')

module.exports = function(){

    router.post('/', function(req, res){
        var AudioVisualData = {
            id_elemento: null,
            elemento: req.body.elemento,
            estado: req.body.estado,
        }

        AudioVisualModel.insertAudioVisual(AudioVisualData, function(error, data){
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
            AudioVisualModel.getAudioVisual(id, function(error, data){
                if(typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data)
                }else{
                    res.json(404, {"msg":"Registro no existe"})
                }
            })
        }else{
            res.status(500).json({"msg":"no es un numero"})
        }

    })

    router.put('/', function(req, res){
        var AudioVisualData = {
            id_elemento: req.body.id_elemento,
            elemento: req.body.elemento,
            estado: req.body.estado,
        }

        AudioVisualModel.updateAudioVisual(AudioVisualData, function(error, data){
            if(data && data.msg){
                res.status(200).json(data)
            }else{
                res.status(500).send({error:":("})
            }
        })
    })

    router.get('/', function(req, res){
        AudioVisualModel.getAudioVisuales(function(error, data){
            res.status(200).json(data)
        })
    })

    return router
}