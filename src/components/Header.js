import { Text, View, StyleSheet, Platform, StatusBar, Image } from 'react-native';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';

const Header = ({ title = 'PAW FUND ME', navigation }) => {
    return (
        <View style={styles.container}>
            {navigation.canGoBack()&&
            <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="black"/>
            </Pressable>}
            <Text style={styles.text}>{title}</Text>
            <Text style={[styles.paragraph, { fontFamily: fonts.ProtestRiotRegular }]}>
                Bienvenido a Paw Fund Me, tu plataforma solidaria para ayudar a las mascotas necesitadas. Descubre conmovedoras historias de animales que requieren tu apoyo y únete a nuestra comunidad comprometida. Explora las adorables caras que esperan tu ayuda y elige participar donando la cantidad que desees. ¡Cada contribución nos acerca un paso más a alcanzar nuestros objetivos y brindarles una vida mejor a estos fieles compañeros! Juntos, podemos hacer la diferencia.
            </Text>
            <Image source={require('../../assets/inicio.png')} style={styles.logo} />
        </View>
    );
}

export default Header

const styles = StyleSheet.create({
    container:{
 
        backgroundColor: colors.bgcolor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
    },
    paragraph: {
        margin: 30,
        color: colors.text,
        textAlign: 'center',
        fontSize: 18,
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 50,
        marginBottom: 50,
    }
})