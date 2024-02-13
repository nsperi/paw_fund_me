import {StyleSheet, Text, View, FlatList} from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({selectedCategoryState}) => {
    return(
        <View>
            <Header/>
            <Categories selectedCategoryState={selectedCategoryState}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})