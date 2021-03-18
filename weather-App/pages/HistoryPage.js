import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {  useSelector } from 'react-redux'


export default function HistoryPage() {

    const activationEvents = useSelector(state => state.products.activationEvents)
    const renderGridItem = (itemData) => {

        return <View style={styles.screen} >
            <View style={styles.card}>
                <Text style={{fontSize:20}}>Action: {itemData.item.action}</Text>
                <Text>Time: {new Date(itemData.item.timestamp).toLocaleTimeString()}</Text>
                <Text>Date: {new Date(itemData.item.timestamp).toLocaleDateString()}</Text>
                <View style={{ backgroundColor: itemData.item.product.color, borderRadius: 5, padding: 10 }}>
                    <Text style={styles.title}>{itemData.item.product.name}</Text>
                    <Text >{itemData.item.product.favorite}</Text>
                    <Text>{itemData.item.product.season}</Text>
                    <View style={styles.buttonContainer}>
                    </View>
                </View>
            </View>
        </View>
    }
    return (
        <View style={styles.screen}>

            <FlatList
                keyExtractor={(item, index) => item.id}
                data={activationEvents}
                renderItem={renderGridItem}
                numColumns={1}
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
})
