import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../screens/Orders'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()
const OrderStack = () =>{
    return(
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={({navigation})=>{
                return{
                    header: ()=>{
                        return <Header title='Ordenes' navigation={navigation}/>
                    }
                }
            }}
            >
                <Stack.Screen name='Orders' component={Orders}/>
        </Stack.Navigator>
    )
}

export default OrderStack