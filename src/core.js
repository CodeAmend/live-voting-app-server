import { List, Map } from 'immutable';

// For reducer
export const INITIAL_STATE = Map();

// Helper function for NEXT
function getWinners(vote) {
  if(!vote) return [];
  let [a, b] = vote.get('pair');
  let aVotes = vote.getIn(['tally', a], 0);
  let bVotes = vote.getIn(['tally', b], 0);
  if      (aVotes > bVotes) return [a]
  else if (aVotes < bVotes) return [b]
  else                      return [a, b]
}

// SET_ENTRIES
export function setEntries(state, entries) {
  return state.set('entries', List(entries))
}

// NEXT
export function next(state) {
  // Alter entries with winners
  const entries = state.get('entries')
    .concat( getWinners( state.get('vote') ));

  // console.log(entries);
  if(entries.size === 1) {
    return state.remove('vote')
                .remove('entries')
                .set('winner', entries.first());
  } else {
    return state.merge({
      vote: Map({ pair: entries.take(2) }),
      entries: entries.skip(2)
    });
  }

}

// VOTE
export function vote(voteState, choice) {
  return voteState.updateIn(
    ['tally', choice], 0, tick => tick + 1
  );
}
