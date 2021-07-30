import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductItem from '../../components/ProductItems';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Renver Product Component */}
      <ProductItem />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    padding: 10,
  },
  
});

export default HomeScreen;
