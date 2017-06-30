import { expect } from 'chai';
import { List, Map } from 'immutable';

import { setEntries } from '../src/core';


describe("Appliction Logic", () => {

  describe("setEntries", () => {

    it("adds the entries to state", () => {

      let state = Map();
      let entries = ['movie1', 'movie2']
      let nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('movie1', 'movie2')
      }));


    });

  });

});
