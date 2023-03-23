export const init = { identificacion: '', nombres: '', asignatura: '', notaUno: '', notaDos: '', notaTres: '', definitiva: '', observacion: '' }

export const calcularDefinitiva = (notaUno, notaDos, notaTres) => {
    const definitiva = (parseFloat(notaUno) * 0.3 + parseFloat(notaDos) * 0.35 + parseFloat(notaTres) * 0.35);
    return definitiva;
}

export const buscarById = (identificacion) => {
    const alumnos = JSON.parse(localStorage.getItem('alumnos'))
    const singleAlumno = alumnos.find(alumno => alumno.identificacion === identificacion)

    return singleAlumno
}

export const checkGrade = (definitiva) => {
    let observacion;
    definitiva >= 3 ? observacion = 'Aprobado' :
    definitiva >= 2 && definitiva <= 2.94 ? observacion = 'Habilita' :
    definitiva = 'Reprobado'
    return observacion
}