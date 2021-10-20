var express = require('express')
var router = express.Router()
var ContactoModel = require('../modelos/contactomodel')


module.exports = function(){

    router.post('/', function(req, res){
        var ContactoData = {
            id_contacto: null,
            tipo_contacto: req.body.tipo_contacto,
            dato_contacto: req.body.dato_contacto,
            prioridad_contacto: req.body.prioridad_contacto,
        }

        ContactoModel.insertContacto(ContactoData, function(error, data){
            if(data){
                res.status(200).json(data)
            }else{
                res.status(500).send({error: ":("})
            }
        })
    })

    router.get('/:id', function(req, res){
        var id = req.params.id
        if(!isNaN(id)){
            ContactoModel.getContacto(id, function(error, data){
                if(typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data)
                }else{
                    res.json(404, {"msg":"Error"})
                }
            })
        }else{
            res.status(500).json({"msg":"no es un numero"})
        }

    })

    router.put('/', function(req, res){
        var ContactoData = {
            id_contacto: req.body.id_contacto,
            tipo_contacto: req.body.tipo_contacto,
            dato_contacto: req.body.dato_contacto,
            prioridad_contacto: req.body.prioridad_contacto,
            id_persona: req.body.id_persona
        }

        ContactoModel.updateContacto(ContactoData, function(error, data){
            if(data && data.msg){
                res.status(200).json(data)
            }else{
                res.status(500).send({error: ":("})
            }
        })
    })

    router.get('/', function(req, res){
        ContactoModel.getContactos(function(error, data){
            res.status(200).json(data)
        })
    })

    return router
}