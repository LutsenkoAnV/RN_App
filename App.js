import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { loadPictures as loadPicturesStore } from './store/store';

const App = ({ pictures, loadPictures }) => {
  // useMemo(loadPictures, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{pictures}</Text>
      {/* {pictures.map(picture => (
        <Text style={styles.text}>{picture.name}</Text>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// const mapStateToProps = state => ({
//   pictures: state.pictures,
// });

// const mapDispatchToProps = {
//   loadPictures: loadPicturesStore,
// };

export default connect()(App);

// export default App;
