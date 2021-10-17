var connection = require('../conexion/index')
var InformeModel = {}

var fechaInicio = '2021-02-01'
var fechaFinal = '2021-02-09'

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