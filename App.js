
import { Formik } from 'formik';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import styles from './App.styles'
import { calcularDefinitiva } from './helpers';
import { formValidationSchema } from './schemas';
export default function App() {

  const handleSubmit = (values) => {
    console.log('2', values)
    const notaDefinitiva = calcularDefinitiva(values.notaUno, values.notaDos, values.notaTres)
    console.log({
      ...values,
      definitiva: notaDefinitiva
    })
  }
  return (
    <View style={styles.container}>

      <Formik
        validationSchema={formValidationSchema}
        initialValues={{ identificacion: '', nombres: '', asignatura: '', notaUno: '', notaDos: '', notaTres: '', definitiva: '', observacion: '' }}
        onSubmit={values => handleSubmit(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          setFieldValue
        }) => (
          <>
            <Text style={styles.title}>Sistema de Notas</Text>
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Identificacion</Text>
              <TextInput
                style={styles.formInput}
                name="identificacion"
                onChangeText={handleChange('identificacion')}
                onBlur={handleBlur('identificacion')}
                value={values.identificacion}
                keyboardType="text"
              />
            </View>
            {(errors.identificacion && touched.identificacion) &&
              <Text style={styles.errorText}>{errors.identificacion}</Text>
            }
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Nombres</Text>
              <TextInput
                style={styles.formInput}
                name="nombres"
                onChangeText={handleChange('nombres')}
                onBlur={handleBlur('nombres')}
                value={values.nombres}
                keyboardType="text"
              />
            </View>
            {(errors.nombres && touched.nombres) &&
              <Text style={styles.errorText}>{errors.nombres}</Text>
            }
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Asignatura</Text>
              <TextInput
                style={styles.formInput}
                name="asignatura"
                onChangeText={handleChange('asignatura')}
                onBlur={handleBlur('asignatura')}
                value={values.asignatura}
                keyboardType="text"
              />
            </View>
            {(errors.asignatura && touched.asignatura) &&
              <Text style={styles.errorText}>{errors.asignatura}</Text>
            }
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Nota Momento 1 (30%)</Text>
              <TextInput
                style={styles.formInput}
                name="notaUno"
                onChangeText={handleChange('notaUno')}
                onBlur={handleBlur('notaUno')}
                value={values.notaUno}
                keyboardType="text"
              />
            </View>
            {(errors.notaUno && touched.notaUno) &&
              <Text style={styles.errorText}>{errors.notaUno}</Text>
            }
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Nota Momento 2 (35%)</Text>
              <TextInput
                style={styles.formInput}
                name="notaDos"
                onChangeText={handleChange('notaDos')}
                onBlur={handleBlur('notaDos')}
                value={values.notaDos}
                keyboardType="text"
              />
            </View>
            {(errors.notaDos && touched.notaDos) &&
              <Text style={styles.errorText}>{errors.notaDos}</Text>
            }
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Nota Momento 3 (35%)</Text>
              <TextInput
                style={styles.formInput}
                name="notaTres"
                onChangeText={handleChange('notaTres')}
                onBlur={handleBlur('notaTres')}
                value={values.notaTres}
                keyboardType="text"
              />
            </View>
            {(errors.notaTres && touched.notaTres) &&
              <Text style={styles.errorText}>{errors.notaTres}</Text>
            }
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Definitiva</Text>
              <TextInput style={styles.formInput} />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Observacion (35%)</Text>
              <TextInput style={styles.formInput} />
            </View>

            <View style={styles.buttons}>

              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Calcular / Guardar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Limpiar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Buscar</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

