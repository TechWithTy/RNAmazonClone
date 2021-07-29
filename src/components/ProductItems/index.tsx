import React from 'react'
import { View, Text } from 'react-native'

const ProductItem = () => {
    return (
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
    )
}

export default ProductItem;
