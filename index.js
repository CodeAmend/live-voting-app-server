// Modules
import makeStore from './src/store';
import startServer from './src/server'

export const store = makeStore();
startServer(store);


// SET_ENTRIES: List of Nirvana songs.
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});

// NEXT: Initial step to create a pair for voting.
store.dispatch({ type: 'NEXT' });
