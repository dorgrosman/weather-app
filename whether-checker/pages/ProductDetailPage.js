import React, { useEffect, useCallback } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import { Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/ProductAction'

export default function ProductDetailPage(props) {

  const availableProductsProducts = useSelector(state => state.products.products)
  const favoriteProducts = useSelector(state => state.products.favoriteProducts)
  const dispatch = useDispatch()

  const productId = props.navigation.getParam('productId')
  const currentProductIsFavorite = useSelector(state =>
    state.products.favoriteProducts.some(product => product.id === productId)
  );
  const selectedProduct = availableProductsProducts.find(product => product.id === productId)
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(productId))
  }, [dispatch, productId])

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({ isFav: currentProductIsFavorite });
  }, [currentProductIsFavorite]);
  return (
    <View style={styles.screen}>
      <View style={styles.card}>

        <Text>Product: {selectedProduct.name}</Text>
        <Text>Season: {selectedProduct.season}</Text>
        <Text>Description: {selectedProduct.description}</Text>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.img }}
        />
        <Button
          title="Go Back" onPress={() => {
            props.navigation.goBack()
          }} />
      </View>
    </View>
  )
}

ProductDetailPage.navigationOptions = navigationData => {
  const productName = navigationData.navigation.getParam('productName')
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');

  return {
    headerTitle: productName,
    headerRight: (
      <View>
        <HeaderButtons HeaderButtonComponent={HeaderButton} />
        <Ionicons
          title="Favorite"
          name={isFavorite ? 'ios-star' : 'ios-star-outline'}
          size={25}
          onPress={toggleFavorite} />
      </View>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    shadowColor: 'black',
    width: 400,
    height: 350,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  image: {
    width: 200,
    height: 200
  },

})
