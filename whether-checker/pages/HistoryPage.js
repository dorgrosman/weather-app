import React from 'react'
import { View, Text, StyleSheet, FlatList, Button, Image } from 'react-native'
import { useSelector } from 'react-redux'

export default function HistoryPage(props) {
console.log('props:', props)

    const favProducts = useSelector(state => state.products.favoriteProductes)
    
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
                // keyExtractor={(item, index) => item.id}
                // data={favProducts}
                // renderItem={renderGridItem}
                // numColumns={3}
            ></FlatList>
        </View>
    )
}

HistoryPage.navigationOptions = {
    headerTitle: 'Your Operations History'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
