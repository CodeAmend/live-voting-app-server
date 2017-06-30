import { Map, List } from 'immutable';
import { setEntries, next } from './core';

export default function(state = Map(), action) {

  let nextState;

  switch (action.type) {

    case 'SET_ENTRIES':
      return setEntries(state, action.entries);

    case 'NEXT':
      return next(state)

    default:
      return setEntries(state, List())
  }
}
