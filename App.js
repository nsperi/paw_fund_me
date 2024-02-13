import { StyleSheet,SafeAreaView ,useWindowDimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Home from './src/screens/Home'
import PetRegistrationForm from './src/components/PetRegistrationForm'
import { useEffect, useState } from 'react'
import PetsByCategory from './src/screens/PetsByCategory'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import PetDetail from './src/screens/PetDetail'
import colors from './src/utils/globals/colors'

const App = () => {

  const [categorySelected, setCategorySelected] = useState('')

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  return(
    <>
      <StatusBar backgroundColor={colors.bgcolor} />
      <SafeAreaView style={styles.container}>
        {categorySelected === 'REGISTRA A TU MASCOTA' ? 
          <PetRegistrationForm /> : 
          categorySelected === 'DONAR' ?
            <PetsByCategory /> :
            <Home selectedCategoryState={selectedCategoryState} />
        }
      </SafeAreaView>
    </>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

