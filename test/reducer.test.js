import { Map, fromJS, List } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer.js';


describe("Reducer", () => {

  it("handles SET_ENTRIES", () => {

    const initialState = Map();
    const action = { type: 'SET_ENTRIES', entries: ['Trainspotting'] }
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      entries: ['Trainspotting']
    }))
  });

  it("handles NEXT", () => {
    const initialState = fromJS({
      entries: ['Trainspotting', '28 Days']
    });
    const action = { type: 'NEXT' }
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days']
      },
      entries: []
    }))
  });

  it("handles VOTE", () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days']
      },
      entries: List.of()
    });
    const action = { type: 'VOTE', entry: 'Trainspotting' }
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days'],
        tally: { 'Trainspotting': 1 }
      },
      entries: []
    }))
  });

  it("handles undefined state", () => {

    const action = { type: 'SET_ENTRIES', entries: ['Trainspotting'] }
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      entries: ['Trainspotting']
    }));

  });

});
