import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPictures as loadPicturesStore } from '../../store/actions';
import { PhotoList } from '../PhotoList/PhotoList';

const PhotoListScreen = ({ navigation, pictures, loadPictures }) => {
  useMemo(loadPictures, []);

  return (
    <PhotoList pictures={pictures} navigation={navigation} />
  );
};

const mapStateToProps = state => ({
  pictures: state.pictures,
});

const mapDispatchToProps = {
  loadPictures: loadPicturesStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListScreen);

PhotoListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  pictures: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    photoSmall: PropTypes.string,
    photoBig: PropTypes.string,
    user: PropTypes.string,
  })).isRequired,
  loadPictures: PropTypes.func.isRequired,
};
