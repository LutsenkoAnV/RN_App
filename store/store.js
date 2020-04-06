import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { picturesReducer } from './reducers';

export const store = createStore(picturesReducer, applyMiddleware(thunk));
