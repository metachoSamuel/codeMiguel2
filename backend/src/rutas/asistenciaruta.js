var express = require('express')
var router = express.Router()

var AsistenciaModel = require('../modelos/asistenciamodel')

module.exports = function () {
    router.get('/', function (req, res) {
        AsistenciaModel.getAsistencias(function (error, data) {
            res.status(200).json(data)
        })
    })

    router.get('/:id', function (req, res) {
        var id = req.params.id

        if (!isNaN(id)) {
            AsistenciaModel.getAsistencia(id, function (error, data) {
                if (typeof data !== 'undefined' && data.length > 0) {
                    res.status(200).json(data)
                } else {
                    res.json(404, { "msg": "Registro no existe" })
                }
            })
        } else {
            res.status(500).json({ "msg": "No es un numero" })
        }
    })

    router.post('/', function (req, res) {
        var AsistenciaData = {
            id_asistencia: null,
            fecha: req.body.fecha,
            observaciones: req.body.observaciones,
            estado: req.body.estado,
            id_persona: req.body.id_persona,
            id_materia: req.body.id_materia,
        }

        AsistenciaModel.insertAsistencia(AsistenciaData, function(error, data){
            if(data){
                res.status(200).json(data)

            }else{
                res.status(500).send({error: "Yucas"})
            }
        })
    })

    router.put('/', function(req, res){
        var AsistenciaData = {
            id_asistencia: req.body.id_asistencia,
            fecha: req.body.fecha,
            observaciones: req.body.observaciones,
            estado: req.body.estado,
            id_persona: req.body.id_persona,
            id_materia: req.body.id_materia,
        }

        AsistenciaModel.updatePersona(AsistenciaData, function(error, data){
            if(data && data.msg){
                res.status(200).json(data)
            }else{
                res.status(500).send({error: "Yucas"})
            }
        })
    })

    return router
}