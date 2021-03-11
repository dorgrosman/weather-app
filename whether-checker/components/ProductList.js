import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import ProductItem from './ProductItem';

export default function ProductList(props) {
  const renderProductItem = itemData => {
    return (
      <ProductItem
        name={itemData.item.name}
        season={itemData.item.season}
        image={itemData.item.imageUrl}
        onSelectProduct={() => {
          props.navigation.navigate({
            routeName: 'ProductDetail',
            params: {
              productId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductItem}
        style={{ width: '100%' }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
})



// <View>
//     <FlatList
//     keyExtractor={(item, index) => item.id}
//     data={products}
//     renderItem={renderGridItem}
//     numColumns={2}
//  ></FlatList>
// </View>
