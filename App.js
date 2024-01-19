import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.title}>PAW FUND ME</Text>
      </Text>
      <Text style={styles.paragraph}>
        Bienvenido a Paw Fund Me, tu plataforma solidaria para ayudar a las mascotas necesitadas. Descubre conmovedoras historias de animales que requieren tu apoyo y únete a nuestra comunidad comprometida. Explora las adorables caras que esperan tu ayuda y elige participar donando la cantidad que desees. ¡Cada contribución nos acerca un paso más a alcanzar nuestros objetivos y brindarles una vida mejor a estos fieles compañeros! Juntos, podemos hacer la diferencia.
      </Text>
      <Image
        source={require('./assets/inicio.png')} 
        style={styles.logo}
      />
      <Button
        onPress={() => {
          console.log('You tapped the button!');
        }}
        title="COMENZAR"
        style={styles.button}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9AA1F5', 
    color: '#CF9AF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraph: {
    margin: 30,
  },
  logo: {
    width: 200,
    height: 200, 
    marginTop: 50, 
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#E12AF5',
    marginTop: 50,
  }
});
