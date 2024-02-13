import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PetRegistrationForm({ onPetSubmit }) {
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [amountNeeded, setAmountNeeded] = useState('');

  const handleSubmit = () => {
    if (!petName || !petAge || !medicalCondition || !amountNeeded) {
      return;
    }

    const newPet = {
      name: petName,
      age: petAge,
      condition: medicalCondition,
      neededAmount: amountNeeded,
    };

    onPetSubmit(newPet);

    setPetName('');
    setPetAge('');
    setMedicalCondition('');
    setAmountNeeded('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre de la mascota:</Text>
      <TextInput
        style={styles.input}
        value={petName}
        onChangeText={(text) => setPetName(text)}
      />

      <Text style={styles.label}>Edad de la mascota:</Text>
      <TextInput
        style={styles.input}
        value={petAge}
        onChangeText={(text) => setPetAge(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Condición médica:</Text>
      <TextInput
        style={styles.input}
        value={medicalCondition}
        onChangeText={(text) => setMedicalCondition(text)}
      />

      <Text style={styles.label}>Cantidad necesaria (en dinero):</Text>
      <TextInput
        style={styles.input}
        value={amountNeeded}
        onChangeText={(text) => setAmountNeeded(text)}
        keyboardType="numeric"
      />

      <Button onPress={handleSubmit} title="Registrar Mascota" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
   
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#d7e2dc',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    color: '#d7e2dc',
  },
});
