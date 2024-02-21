import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Home from '../screens/Home'
import PetsByCategory from '../screens/PetsByCategory'
import PetDetail from '../screens/PetDetail'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
    return(
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({route, navigation}) =>{
                return{
                    header: ()=>{
                        return <Header
                                    navigation={navigation}
                                    title={route.name === 'Home' ? 'Categorias':
                                            route.name === 'PetsByCategory' ? route.params.categorySelected:'Detalle'
                                        }/>
                    }
                }
            }}
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='PetsByCategory' component={PetsByCategory}/>
            <Stack.Navigator name='PetDetail' component={PetDetail}/>
        </Stack.Navigator>
    )
} 

export default ShopStack