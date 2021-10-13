var express = require('express')
var router = express.Router()

var PersonaModel = require('../modelos/personamodel')

module.exports = function(){
    
    router.get('/', function(req, res){
        PersonaModel.getPersonas(function(error, data){
            res.status(200).json(data)
        })
    })

    //CRUL Read(Leer)
    router.get('/:id', function(req, res){
        var id = req.params.id

        if (!isNaN(id)){
            PersonaModel.getPersona(id, function(error, data){
                if (typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data)
                }else{
                    res.json(404, {
                        "msg":"Registro no existe"
                    })
                }
            })
        }else {
            res.status(500).json({"msg":"No es un numero"})
        }
    })
    //CRUL Create(Crear)
    router.post('/', function(req, res){
        //Objeto JSON con los datos del nuevo registro
        var PersonaData={
            id_persona: null,
            nombre_1: req.body.nombre_1,
            nombre_2: req.body.nombre_2,
            apellido_1: req.body.apellido_1,
            apellido_2: req.body.apellido_2,
            no_documento: req.body.no_documento,
            tipo_persona: req.body.tipo_persona,
        }

        PersonaModel.insertPersona(PersonaData, function(error, data){
            if(data){
                res.status(200).json(data)
            }else{
                res.status(500).send({error: "Pailas llave"})
            }
        })

    })

    //

    router.put("/", function(req, res){
        var PersonaData={
            id_persona: req.body.id_persona,
            nombre_1: req.body.nombre_1,
            nombre_2: req.body.nombre_2,
            apellido_1: req.body.apellido_1,
            apellido_2: req.body.apellido_2,
            no_documento: req.body.no_documento,
            tipo_persona: req.body.tipo_persona,
        }

        PersonaModel.updatePersona(PersonaData, function(error, data){
            if(data && data.msg){
                res.status(200).json(data)
            }else{
                res.status(500).send({error: "Pailas socio"})
            }
        })
    })

    return router
}

