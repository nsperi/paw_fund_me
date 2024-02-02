import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Modal, FlatList } from 'react-native';
import PetRegistrationForm from './PetRegistrationForm';

export default function App() {
  const [isRegistrationModalVisible, setRegistrationModalVisible] = useState(false);
  const [registeredPets, setRegisteredPets] = useState([]);

  const openRegistrationModal = () => {
    setRegistrationModalVisible(true);
  };

  const closeRegistrationModal = () => {
    setRegistrationModalVisible(false);
  };

  const handlePetRegistration = (newPet) => {
    setRegisteredPets((prevPets) => [...prevPets, newPet]);
    closeRegistrationModal();
  };

  return (
    <View style={styles.container}>
      <Text>
        <Text style={[styles.title, { fontFamily: 'Helvetica', fontWeight: 'bold' }]}>PAW FUND ME</Text>
      </Text>
      <Text style={[styles.paragraph, { fontFamily: 'Helvetica' }]}>
        Bienvenido a Paw Fund Me, tu plataforma solidaria para ayudar a las mascotas necesitadas...
      </Text>
      <Image source={require('./assets/inicio.png')} style={styles.logo} />
      
      <Button
        onPress={openRegistrationModal}
        title="REGISTRA A TU MASCOTA"
        color="#d7e2dc"
        style={styles.button}
      />
      
      <Button
        onPress={() => {
          console.log('You tapped the button!');
        }}
        title="COLABORAR"
        color="#d7e2dc"
        style={styles.button}
      />

      <FlatList
        data={registeredPets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.petItem}>
            <Text style={styles.petText}>Nombre: {item.name}</Text>
            <Text style={styles.petText}>Edad: {item.age}</Text>
            <Text style={styles.petText}>Condición Médica: {item.condition}</Text>
            <Text style={styles.petText}>Cantidad Necesaria: {item.neededAmount}</Text>
          </View>
        )}
      />

      <Modal
        visible={isRegistrationModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeRegistrationModal}
      >
        <View style={styles.modalContainer}>
          <PetRegistrationForm onPetSubmit={handlePetRegistration} />
          <Button onPress={closeRegistrationModal} title="Cerrar" color="#d7e2dc" />
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FCF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5BBDDE',
  },
  paragraph: {
    margin: 30,
    color: '#5BBDDE',
    textAlign: 'center',
    fontSize: 18,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginBottom: 50,
  },
  button: {
    marginVertical: 10,
    width: '80%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  petItem: {
    backgroundColor: '#d7e2dc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '80%',
  },
  petText: {
    fontSize: 16,
    color: '#333',
  },
});
