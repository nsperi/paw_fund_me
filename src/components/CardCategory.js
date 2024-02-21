import { StyleSheet, Pressable, Text, View} from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import PetsByCategory from '../screens/PetsByCategory'

const CardCategory = ({item, navigation}) => {
    return(
        <Pressable onPress={()=>navigation.navigate(PetsByCategory,{categorySelected:item})}>
            <ShadowPrimary style={styles.container}>
            <Text style={styles.text}>{item}</Text>
            </ShadowPrimary>
        </Pressable>
        
    )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
  
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
   
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
    }
})