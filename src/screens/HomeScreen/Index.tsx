import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductItem from '../../components/ProductItems';
import products from '../../data/products';
const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
