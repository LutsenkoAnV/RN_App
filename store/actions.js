import { LOAD_PICTURES, API_URL } from '../utils/constants';
import { getPhotos } from '../api/api';

export const setPictures = payload => ({
  type: LOAD_PICTURES,
  payload,
});

export const loadPictures = () => dispatch => getPhotos(API_URL)
  .then((photos) => {
    const photosWithUsers = photos.map(photo => ({
      id: photo.id,
      photoSmall: photo.urls.small,
      photoBig: photo.urls.full,
      user: photo.user.name,
    }));

    dispatch(setPictures(photosWithUsers));
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(`There has been a problem with fetch: ${error.message}`);
  });
