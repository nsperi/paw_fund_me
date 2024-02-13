import {Pressable, StyleSheet, Text} from 'react-native'
import fonts from '../utils/globals/fonts'

const ButtonPrimary = ({title, onPress}) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container:{
        background:'#FFEF65',
        width: '100%',
        alignItems: 'center',
        borderRadius: 5
    },
    text:{
        fontSize: 16,
        color: '#0000',
        fontFamily: fonts.ProtestRiotRegular
    }
})