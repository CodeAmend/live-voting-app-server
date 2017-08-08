import { Map, fromJS, List } from 'immutable';
import { expect } from 'chai';

import makeStore from '../src/store.js';


describe("Store", () => {

  it("is a Redux store configured witht he correct reducer", () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days']
    });

    expect(store.getState()).to.equal(fromJS({
      entries: ['Trainspotting', '28 Days']
    }))
  });

});
