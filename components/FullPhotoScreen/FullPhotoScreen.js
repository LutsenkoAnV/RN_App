import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import { FullPhoto } from '../FullPhoto/FullPhoto';

const FullPhotoScreen = ({ route }) => {
  const photoUri = route.params.photoURL;

  return (
    <FullPhoto photoUri={photoUri} />
  );
};

export default FullPhotoScreen;

FullPhotoScreen.propTypes = {
  route: ReactRouterPropTypes.route.isRequired,
};
