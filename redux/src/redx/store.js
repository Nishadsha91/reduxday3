import { createStore, applyMiddleware } from 'redux';
import counterReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'


// Logger Middleware
const logger = (store) => (next) => (action) => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next State:', store.getState());
  return result;
};

// Redux DevTools extension support
const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
