//react
import { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

//Formik
import { useFormik } from 'formik';

//Styles
import styles from './App.styles'

//Helpers
import { buscarById, calcularDefinitiva, init } from './helpers';

//Schemas
import { formValidationSchema } from './schemas';

export default function App() {
  const alumnos = JSON.parse(localStorage.getItem('alumnos'))
  const formikProps = useFormik({
    initialValues: init,
    validationSchema: formValidationSchema,
    onSubmit: handleSubmit
  });

  const handleSubmit = () => {
    const notaDefinitiva = calcularDefinitiva(formikProps.values.notaUno, formikProps.values.notaDos, formikProps.values.notaTres).toFixed(2)
    // formikProps.resetForm()
    formikProps.setFieldValue('definitiva', notaDefinitiva)
    localStorage.setItem('alumnos', JSON.stringify([...alumnos, { ...formikProps.values, definitiva: notaDefinitiva }]))
  }

  const search = (identificacion) => {
    const alumno = buscarById(identificacion)
    formikProps.setValues(alumno)
  }

  useEffect(() => {
    if (!localStorage.getItem('alumnos')) {
      localStorage.setItem('alumnos', JSON.stringify([]))
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema de Notas</Text>

      <View style={styles.formItem}>
        <Text style={styles.formLabel}>Identificacion</Text>
        <TextInput
          style={styles.formInput}
          name="identificacion"
          onChangeText={formikProps.handleChange('identificacion')}
          onBlur={formikProps.handleBlur('identificacion')}
          value={formikProps.values.identificacion}
          keyboardType="text"
        />
      </View>
      {(formikProps.errors.identificacion && formikProps.touched.identificacion) &&
        <Text style={styles.errorText}>{formikProps.errors.identificacion}</Text>
      }
      <View style={styles.formItem}>
        <Text style={styles.formLabel}>Nombres</Text>
        <TextInput
          style={styles.formInput}
          name="nombres"
          onChangeText={formikProps.handleChange('nombres')}
          onBlur={formikProps.handleBlur('nombres')}
          value={formikProps.values.nombres}
          keyboardType="text"
        />
      </View>
      {(formikProps.errors.nombres && formikProps.touched.nombres) &&
        <Text style={styles.errorText}>{formikProps.errors.nombres}</Text>
      }
      <View style={styles.formItem}>
        <Text style={styles.formLabel}>Asignatura</Text>
        <TextInput
          style={styles.formInput}
          name="asignatura"
          onChangeText={formikProps.handleChange('asignatura')}
          onBlur={formikProps.handleBlur('asignatura')}
          value={formikProps.values.asignatura}
          keyboardType="text"
        />
      </View>
      {(formikProps.errors.asignatura && formikProps.touched.asignatura) &&
        <Text style={styles.errorText}>{formikProps.errors.asignatura}</Text>
      }
      <View style={styles.formItem}>
        <Text style={styles.formLabel}>Nota Momento 1 (30%)</Text>
        <TextInput
          style={styles.formInput}
          name="notaUno"
          onChangeText={formikProps.handleChange('notaUno')}
          onBlur={formikProps.handleBlur('notaUno')}
          value={formikProps.values.notaUno}
          keyboardType="text"
        />
      </View>
      {(formikProps.errors.notaUno && formikProps.touched.notaUno) &&
        <Text style={styles.errorText}>{formikProps.errors.notaUno}</Text>
      }
      <View style={styles.formItem}>
        <Text style={styles.formLabel}>Nota Momento 2 (35%)</Text>
        <TextInput
          style={styles.formInput}
          name="notaDos"
          onChangeText={formikProps.handleChange('notaDos')}
          onBlur={formikProps.handleBlur('notaDos')}
          value={formikProps.values.notaDos}
          keyboardType="text"
        />
      </View>
      {(formikProps.errors.notaDos && formikProps.touched.notaDos) &&
        <Text style={styles.errorText}>{formikProps.errors.notaDos}</Text>
      }
      <View style={styles.formItem}>
        <Text style={styles.formLabel}>Nota Momento 3 (35%)</Text>
        <TextInput
          style={styles.formInput}
          name="notaTres"
          onChangeText={formikProps.handleChange('notaTres')}
          onBlur={formikProps.handleBlur('notaTres')}
          value={formikProps.values.notaTres}
          keyboardType="text"
        />
      </View>
      {(formikProps.errors.notaTres && formikProps.touched.notaTres) &&
        <Text style={styles.errorText}>{formikProps.errors.notaTres}</Text>
      }
      <View style={styles.formItem}>
        <Text style={styles.formLabel}>Definitiva</Text>
        <TextInput
          style={styles.formInput}
          value={formikProps.values.definitiva}
        />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.formLabel}>Observacion</Text>
        <TextInput
          style={styles.formInput}
          name="observacion"
          onChangeText={formikProps.handleChange('observacion')}
          onBlur={formikProps.handleBlur('observacion')}
          value={formikProps.values.observacion}
          keyboardType="text"
        />
      </View>

      <View style={styles.buttons}>

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Calcular / Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => formikProps.resetForm()}>
          <Text style={styles.btnText}>Limpiar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => search(formikProps.values.identificacion)}>
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

