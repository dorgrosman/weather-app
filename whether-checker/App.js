
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import ProductNavigation from './navigation/ProductNavigtion'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import producteReducer from './store/reducers/ProductReducer';
import weatherReducer from './store/reducers/WeatherReducer';

const rootReducer = combineReducers({
  products: producteReducer,
  weather: weatherReducer
})

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
