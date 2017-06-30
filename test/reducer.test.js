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
    const initialState = Map({
      entries: List.of('Trainspotting', '28 Days')
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

  it("handles VOTE");

});
