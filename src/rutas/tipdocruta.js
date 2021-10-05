//Instanciando las librerias

var express = require('express')
var router = express.Router()

//Obtenemos el modelo tipdocmodel con toda la shit
var TipDocModel = require('../modelos/tipdocmodel')

//Creamos el ruteo de la clase
module.exports = function(){

	//Muestra el método CRUL Listar que muestra todos los tipos de documentos
	router.get("/", function(req, res){
		TipDocModel.getTipDocs(function(error, data){
			res.status(200).json(data)
		})
	});

	//Muestra el método CRUL read(leer), que muestra el tipo de documento solicitado
	router.get("/:id", function(req, res){

	});

	//Muestra y captura los datos del método CRUL crear, usando el verbo post
	router.post("/", function(req, res){
		console.log('Buena la rata')
	});

	//Muestra y captura los datos para el método CRUL update (actualizar), usando el verbo put
	router.put("/", function(req, res){

	});

	//exportamos el objeto para tenerlo disponible en el app
	return router

}
