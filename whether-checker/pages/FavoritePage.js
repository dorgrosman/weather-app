import React from 'react'
import { View, Text, StyleSheet, FlatList, Button, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export default function FavoritePage(props) {
    
    const favProducts = useSelector(state => state.products.favoriteProducts)
    const renderGridItem = (itemData) => {

        return <View style={styles.screen} onPress={() => {
            console.log('itemData.item.id:', itemData.item.id)
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
                    <Text >{itemData.item.favorite}</Text>
                    <Text>{itemData.item.season}</Text>
                    <View style={styles.buttonContainer}>
                        <Image />
                        <Button title="Details" onPress={() => {
                            props.navigation.navigate({
                                routeName: 'ProductDetails',
                                params: {
                                    productId: itemData.item.id,
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
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={favProducts}
                renderItem={renderGridItem}
                numColumns={3}
            ></FlatList>
        </View>
    )
}

FavoritePage.navigationOptions = {
    headerTitle: 'Your Favorites Products'
}

const styles = StyleSheet.create({
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
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})
