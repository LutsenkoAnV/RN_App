import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export const FullPhoto = ({ photoUri }) => (
  <View>
    <Image
      style={styles.photo}
      source={{
        uri: photoUri,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  photo: {
    height: '100%',
  },
});

FullPhoto.propTypes = {
  photoUri: PropTypes.string.isRequired,
};
