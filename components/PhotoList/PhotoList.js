import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export const PhotoList = ({ navigation, pictures }) => (
  <FlatList
    keyExtractor={item => item.id}
    data={pictures}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() => navigation.navigate('FullPhotoScreen', {
          photoURL: item.photoBig,
        })}
      >
        <View>
          <Image
            style={styles.photo}
            source={{
              uri: item.photoSmall,
            }}
          />
          <View style={styles.container}>
            <Text style={styles.text}>
              {item.user}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )}
  />
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    backgroundColor: 'black',
    opacity: 0.6,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: 'white',
  },
  photo: {
    width: '100%',
    height: 300,
  },
});

PhotoList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  pictures: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    photoSmall: PropTypes.string,
    photoBig: PropTypes.string,
    user: PropTypes.string,
  })).isRequired,
};
