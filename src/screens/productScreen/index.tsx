/* eslint-disable prettier/prettier */
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button';
import QuantitySelector from '../../components/QuantitySelector';
import product from '../../data/product';
import styles from './styles';

const ProductScreen = () => {
  const [slectedOption, setslectedOption] = useState(
    product.options ? product.options[0] : null,
  );

  const [quantity, setQuantity] = useState(1);
  console.log(slectedOption);
  return (
    <View>
      <Text style={styles.title}>{product.title} </Text>

      {/* Image Carousel */}

      {/* Option Selector */}

      <Picker
        selectedValue={slectedOption}
        onValueChange={itemValue => setslectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        {' '}
        from $ {product.price}{' '}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>
      {/* Quantity Selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Button */}
      <Button
        text={'Add To Cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
      
      />
   
    </View>
  );
};

export default ProductScreen;
