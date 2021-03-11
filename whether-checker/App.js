
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

import ProductNavigation from './navigation/ProductNavigtion'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { useScreens } from 'react-native-screens'

import producteReducer from './store/reducers/ProductReducer';

// useScreens()

const rootReducer = combineReducers({
  products: producteReducer,

})

console.log('rootReducer:', rootReducer)
const store = createStore(rootReducer)

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)


  return (
    <Provider store={store}>
      <ProductNavigation />
      {/* <getWeather /> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
