import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.product.url}} />
);

Product.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.product.title,
  headerStyle: {
    backgroundColor: '#da552f',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default Product;
