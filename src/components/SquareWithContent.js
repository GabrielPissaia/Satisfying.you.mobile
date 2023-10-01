import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SquareWithContent = ({ imageSource, text }) => {
  return (
    <View style={styles.square}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: 'white',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default SquareWithContent;
