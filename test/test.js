import { expect } from 'chai';
import { List, Map } from 'immutable';

import { setEntries, next } from '../src/core';


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

    it("takes the next two entries under vote", () => {

      const state = Map({
        entries: List.of('Trainspotting', 'Eternal Sunshine', 'Shawshank')
      });

      const nextState = next(state);

      expect(nextState).to.equal(Map({
        // KEY: vote
        vote: Map({
          pair: List.of('Trainspotting', 'Eternal Sunshine')
        }),
        // KEY: entries
        entries: List.of('Shawshank')
      }));

    });

  });

});
