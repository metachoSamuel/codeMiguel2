var express = require('express')
var router = express.Router()

var MateriaModel = require('../modelos/materiamodel')

module.exports = function(){

    router.post('/', function(req, res){
        
        var MateriaData={
            id_materia: null,
            nombre_materia: req.body.nombre_materia,
            id_carrera: req.body.id_carrera,
        }

        MateriaModel.insertMateria(MateriaData, function(error, data){
            if(data){
                res.status(200).json(data)
            }else{
                res.status(500).send({error:"Flayo"})
            }
        })

    })

    router.get('/:id', function(req, res){
        var id = req.params.id

        if(!isNaN(id)){
            MateriaModel.getMateria(id, function(error, data){
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
        var MateriaData = {
            id_materia: req.body.id_materia,
            nombre_materia: req.body.nombre_materia,
            id_carrera: req.body.id_carrera, 
        }

        MateriaModel.updateMateria(MateriaData, function(error, data){
            if(data && data.msg){
                res.status(200).json(data)
            }else{
                res.status(500).send({error: "Flayo"})
            }
        })

    })

    router.get('/', function(req, res){
        MateriaModel.getMaterias(function(error, data){
            res.status(200).json(data)
        })
    })

    return router

}
