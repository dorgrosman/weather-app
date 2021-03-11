import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import ProductDetailPage from '../pages/ProductDetailPage'
import FavoritePage from '../pages/FavoritePage'
import HomePage from '../pages/HomePage'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const ProductNavigation = createStackNavigator({
    Home:HomePage,
    ProductDetails: ProductDetailPage
})

const FavNavigator = createStackNavigator(
    {
      Favorites: FavoritePage,
      ProductDetail: ProductDetailPage
    },
  );

const FavoriteProdct = createBottomTabNavigator({
    
    All: {
        screen: ProductNavigation,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="apps-outline"
                size={25}
                color={tabInfo.tintColor}
              />
            );
          }
        }
      },
      Favorites: {
        screen: FavNavigator,
        navigationOptions: {
          tabBarLabel: 'Favorites!',
          tabBarIcon: tabInfo => {
            return (
              <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            );
          }
        }
      }
},{
   tabBarOptions:{
    activeTintColor:Colors.accentColor
   } 
})

const createApp =createAppContainer(FavoriteProdct)

export default createApp 
