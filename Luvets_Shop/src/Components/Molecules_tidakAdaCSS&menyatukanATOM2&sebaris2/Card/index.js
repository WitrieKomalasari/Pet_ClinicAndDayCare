import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../Utils';

const PetCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <Text>PetCard</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PetCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
  },
});
