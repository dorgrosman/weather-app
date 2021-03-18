import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

const ProductItem = props => {
  return (
    <View style={styles.productItem}>
      <View onPress={props.onSelectProduct}>
        <View>
          <View style={{ ...styles.productRow, ...styles.productHeader }}>
            <Image
              source={{ uri: props.image }}
              style={styles.Image}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </Image>
          </View>
          <View style={{ ...styles.productRow, ...styles.productDetail }}>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  Image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  productRow: {
    flexDirection: 'row'
  },
  productHeader: {
    height: '85%'
  },
  productDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

export default ProductItem;