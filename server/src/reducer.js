import { setEntries, next, vote, INITIAL_STATE } from './core';

export default function(state = INITIAL_STATE , action) {

  let nextState;

  switch (action.type) {

    case 'SET_ENTRIES':
      return setEntries(state, action.entries);

    case 'NEXT':
      return next(state);

    case 'VOTE':
      return state.update('vote', voteState => {
        return vote(voteState, action.entry)
      })

    default:
      return state;
  }
}
