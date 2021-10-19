var connection = require('../conexion/index')
var InformeModel = {}


InformeModel.getInformeAsistencia = function (id, callback) {
    if (connection) {
        var sql = "SELECT id_asistencia, fecha, observaciones, P.nombre_1, P.nombre_2, M.nombre, C.nombre"
        +" FROM tb_asistencia AS A"
        +"      INNER JOIN tb_persona AS P ON(P.id_persona=A.id_persona)"
        +"      INNER JOIN tb_materia AS M ON(A.id_materia=M.id_materia)"
        +"      INNER JOIN ct_carrera AS C ON(M.id_carrera=C.id_carrera)"
        +"          WHERE(P.id_persona="+connection.escape(id)+" AND A.fecha BETWEEN '2021-01-08' AND '2021-02-09')"
        +"              ORDER BY A.fecha"
        
        connection.query(sql, function (error, row) {
            if (error) {
                throw error
            } else {
                callback(null, row)
            }
        })
    }
}

InformeModel.getInformePrestamo = function(id, callback){
    if(connection){
        var sql = "SELECT id_prestamo, fecha_prestamo, fecha_entrega, P.id_persona, A.elemento, A.estado, PE.nombre_1, PE.apellido_1"
        +" FROM tb_prestamo AS P"
        +"      INNER JOIN ct_audio_visual AS A ON(A.id_elemento=P.id_elemento)"
        +"      INNER JOIN tb_persona AS PE ON(P.id_persona=PE.id_persona)"
        +"          WHERE(A.id_elemento="+connection.escape(id)+" AND P.fecha_prestamo BETWEEN '2021-06-01' AND '2021-06-30')"
        +"              ORDER BY P.fecha_prestamo"  

        connection.query(sql, function(error, row){
            if(error){
                throw error
            }else{
                callback(null, row)
            }
        })
    }
}

module.exports = InformeModel

/*SELECT id_asistencia,
        fecha,
        estado,
        observaciones,
        P.nombre_1,
        P.nombre_2,
        P.apellido_1,
        P.apellido_2,
        M.nombre,
        C.nombre
FROM tb_asistencia AS A
    INNER JOIN tb_persona AS P ON(P.id_persona = A.id_persona)
    INNER JOIN tb_materia AS M ON(A.id_materia = M.id_materia)
    INNER JOIN ct_carrera AS C ON(M.id_carrera = C.id_carrera)
        WHERE(P.id_persona=1 AND A.fecha BETWEEN '2021-01-08' AND '2021-02-09' )
        ORDER BY A.fecha*/