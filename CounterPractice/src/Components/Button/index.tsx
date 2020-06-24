import React from 'react';
import Styled from 'styled-components/native';

// Transparent effects when it touched
const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

// Typescript Grammar
// inconName is neccessary (:), 'plus', 'minus' only with string type
// onPress is not neccessary (?:)
interface Props {
  iconName: 'plus' | 'minus';
  onPress?: () => void;
}

const Button = ({iconName, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon
        source={
          iconName == 'plus'
            ? require('~/Assets/Images/add.png')
            : require('~/Assets/Images/remove.png')
        }></Icon>
    </Container>
  );
};
export default Button;
