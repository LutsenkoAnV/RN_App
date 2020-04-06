import { LOAD_PICTURES } from '../utils/constants';

const initialState = {
  pictures: [],
};

export const picturesReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LOAD_PICTURES:
      return {
        pictures: action.payload,
      };

    default:
      return state;
  }
};
