import React from 'react';
import {Pressable, Text} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default Button;
