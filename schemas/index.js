import * as yup from 'yup'

export const formValidationSchema = yup.object().shape({
    identificacion: yup
    .number()
    .required("Identificacion es requerido"),
    nombres: yup
    .string()
    .required("Nombres son requeridos"),
    asignatura: yup
    .string()
    .required("Asignatura es requerida"),
    notaUno: yup
    .number()
    .min(0,  "Nota Momento 1 deber ser igual o mayor a 0")
    .max(5, "Nota Momento 1 debe ser menor o Igual a 5")
    .required("Nota Momento 1 es requerida"),
    notaDos: yup
    .number()
    .min(0,  "Nota Momento 2 deber ser igual o mayor a 0")
    .max(5, "Nota Momento 2 debe ser menor o Igual a 5")
    .required("Nota Momento 2 es requerida"),
    notaTres: yup
    .number()
    .min(0,  "Nota Momento 3 deber ser igual o mayor a 0")
    .max(5, "Nota Momento 3 debe ser menor o Igual a 5")
    .required("Nota Momento 3 es requerida")
})