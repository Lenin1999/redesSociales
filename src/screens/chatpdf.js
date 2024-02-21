import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const Pdf = () => {
  const [pregunta, setPregunta] = useState('');
  const [respuesta, setRespuesta] = useState('Esperando PDF ....');

 

  const adjuntar = async () => {
    try {
      const docsRes = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', multiple: true,
       
      });

      
      const formData = new FormData();
      docsRes.forEach((doc, index) => {
        formData.append(`file${index}`, {
          uri: doc.uri,
          name: `document_${index}.pdf`,
          type: 'application/pdf',
        });
      });


      const opciones = {
        method: 'POST',
        body: formData,
      };
    
     
    
      const response = await fetch('http://192.168.1.8:5000/cargar', opciones);
      
      const data = await response.json();
      
      if(data){
        alert("PDF listo")
      } 
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const enviarPregunta = async () => {
    const formDataPregunta = new FormData(); 

    formDataPregunta.append("texto",  pregunta);

    const opcionesPregunta = {
      method: 'POST',
      body: formDataPregunta,
    };

    try {
      const responsePRE = await fetch('http://192.168.1.8:5000/preguntapdf', opcionesPregunta); 
    
      const data = await responsePRE.json(); // Analizar el cuerpo de la respuesta JSON
      setRespuesta(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione un PDF:</Text>
      <Button title="Adjuntar PDF" onPress={adjuntar} />
      <Text style={styles.title}>Ingrese su pregunta:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escriba aquí..."
        onChangeText={setPregunta}
      />
      <Button title="Enviar Pregunta" onPress={enviarPregunta} />
      <Text style={styles.respuestaText}>{respuesta}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  respuestaText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Pdf;
