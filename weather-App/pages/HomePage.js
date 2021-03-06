import React from 'react'
import { useSelector } from 'react-redux'
import GetWeather from '../components/WeatherData'
import { View, Text, StyleSheet, FlatList, Button ,TouchableOpacity } from 'react-native'

export default function HomePage(props) {

    const temp = useSelector(state => state.weather.temp)
    const availableProducts = useSelector(state => state.products.products.filter(p => temp >= p.temp.min && temp <= p.temp.max))

    const renderGridItem = (itemData) => {
        return <View style={styles.screen} onPress={() => {
            props.navigation.navigate({
                routeName: 'ProductDetails',
                params: {
                    productId: itemData.item.id
                }
            })
        }}>
            <View style={styles.card}>
                <View style={{ backgroundColor: itemData.item.color, borderRadius: 5, padding: 10 }}>
                    <Text style={styles.title}>{itemData.item.name}</Text>
                    <Text>Season: {itemData.item.season}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Details" onPress={() => {
                            props.navigation.navigate({
                                routeName: 'ProductDetails',
                                params: {
                                    productId: itemData.item.id,
                                    productName: itemData.item.name,
                                }
                            })
                        }} />
                    </View>
                </View>
            </View>
        </View>
    }
    return (
            <View style={styles.screen}>
                <GetWeather />
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={availableProducts}
                    renderItem={renderGridItem}
                    numColumns={1}
                ></FlatList>
            </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    // },
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 10,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    card: {
        shadowColor: 'black',
        width: 220,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },

})
