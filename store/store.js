import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  pictures: 'dsfd',
};

export const setPictures = payload => ({
  type: 'LOAD_PICTURES',
  payload,
});

export const loadPictures = () => {
  return (dispatch) => {
    // eslint-disable-next-line max-len
    fetch('http://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
      .then(response => response.json())
      .then((photos) => {
        const photosWithUsers = photos.map(phone => ({
          photo: phone.urls.raw,
          user: phone.user.name,
        }));

        dispatch(setPictures(photosWithUsers));
      });
  };
};

const picturesReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'LOAD_PICTURES':
      return {
        pictures: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(picturesReducer, applyMiddleware(thunk));
