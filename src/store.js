// Modules
import { createStore } from 'redux';

// Reducer
import reducer from './reducer';

export default function makeStore() {
  return createStore(reducer);
}
