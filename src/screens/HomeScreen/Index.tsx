import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Renver Product Component */}
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg',
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            {/* Ratings */}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingscontainer}>
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-half-full"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-o"
              size={18}
              color={'#e47911'}
            />
            <Text>13,902</Text>
          </View>
          <Text style={styles.price}>
            {' '}
            from $30.59 <Text style={styles.oldPrice}>$16.91</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    padding: 10,
  },
  root: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice:{
  fontSize: 12,
  fontWeight: 'normal',
    textDecorationLine: 'line-through'
  },
  ratingscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default HomeScreen;
