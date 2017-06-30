import { Map, List } from 'immutable';
import { setEntries } from './core';

export default function(state = Map(), action) {

  let nextState;

  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    
    default:
      return setEntries(state, List())
  }
}
