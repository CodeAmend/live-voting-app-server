import { Map, fromJS } from 'immutable';
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

  it("handles NEXT");
  it("handles VOTE");

});
