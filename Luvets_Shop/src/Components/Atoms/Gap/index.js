import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Gap = ({height, width}) => {
  return <View style={styles.container(height, width)} />;
};

const styles = StyleSheet.create({
  container: (height, width) => ({
    height: height,
    width: width,
  }),
});
export default Gap;
