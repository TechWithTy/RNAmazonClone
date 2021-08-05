import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';
interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({text, onPress, containerStyles}) => {
  return (
    <Pressable style={[styles.root, containerStyles]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
