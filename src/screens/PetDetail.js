import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import pets from '../utils/data/pets.json'
import { useEffect, useState } from 'react'
import colors from '../utils/globals/colors'
import Header from '../components/Header'

const PetDetail = ({route}) => {
    const {petId} = route.params
    const [pet, setPet] = useState({})

    useEffect(()=>{
        const petFinded = pets.find(pet=> pet.id === petId)
        setPet(petFinded)
    },[petId])

    return(
        <View style={StyleSheet.container}>
            <Header title='Detalle de mascota'/>
            <View style={[styles.content, !portrait && {flexDirection:'row', gap:10, padding:20}]}>
                <Image 
                    style={[styles.image, !portrait && {width:'40%', height:200}]}
                    source={{uri:pet?.images ? pet.images[0] : null}}
                    resize='cover'
                />
                <View style={[styles.containerText, !portrait && {width:'30%'}]}>
                    <Text style = {styles.title}>{pet.title}</Text>
                    <Text>{pet.description}</Text>
                </View>
                <View style={[styles.containerPrice ,!portrait && {width:"20%",flexDirection:"column"}]}>
                    <Text style={styles.price}>$ {pet.price}</Text>
                    <Pressable style={styles.donate}>
                        <Text style={styles.donateText}>Donate Now</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default PetDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center"
    },
    content:{
        width:"100%"
      },
    
      image:{
        width:"100%",
        height:300
      },
      containerText:{
        gap:25,
        paddingHorizontal:5,
        paddingVertical:25
      },
    
      containerPrice:{
          width:"100%",
          flexDirection:"row",
          justifyContent:"space-around",
          alignItems:"center",
          marginVertical:10
      },
      title:{
        fontSize:20,
        fontWeight:"bold"
      },
      price:{
        fontSize:30
      },
      donate:{
        backgroundColor:colors.bgcolor,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5
      },
      donateText:{
        color:"white"
      }
})