import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CartItem = ({item}) =>{
    return(
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text2}>{item.descripcion}</Text>
                <Text style={styles.text2}>{item.stock}</Text>
            </View>
            <Entypo name="trash" size={30} color="black"/>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.bgcolor,
        padding:20,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:colors.lightGray,
        fontSize:19,
        fontFamily:fonts.ProtestRiotRegular
    },
    text2:{
        color:colors.lightGray,
        fontSize:14,
        fontFamily:fonts.ProtestRiotRegular
    }
})