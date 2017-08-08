import { expect } from 'chai';
import { List, Map } from 'immutable';

import { setEntries, next, vote } from '../src/core';


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

  describe("next", () => {

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

    it("puts winner of vote at end of entry", () => {

      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', 'Eternal Sunshine'),
          tally: Map({ 'Trainspotting': 4, 'Eternal Sunshine': 3 })
        }),
        entries: List.of('Shawshank', 'Amelia', '28 Days'),
      });

      const nextState = next(state);

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Shawshank', 'Amelia'),
        }),
        entries: List.of('28 Days', 'Trainspotting'),
      }));

    });

    it("puts tied votes both at end of entry", () => {

      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', 'Eternal Sunshine'),
          tally: Map({ 'Trainspotting': 4, 'Eternal Sunshine': 4 })
        }),
        entries: List.of('Shawshank', 'Amelia', '28 Days'),
      });

      const nextState = next(state);

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Shawshank', 'Amelia'),
        }),
        entries: List.of('28 Days', 'Trainspotting', 'Eternal Sunshine'),
      }));

    });

    it("Marks winner when just one entry left", () => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days'),
          tally: Map({
            'Trainspotting': 4,
            '28 Days': 2
          })
        }),
        entries: List()
      });

      const nextState = next(state);

      expect(nextState).to.equal(Map({
          winner: 'Trainspotting'
      }));
    });
  });

  describe("vote", () => {

    it("creates a tally for the voted entry", () => {

      const state = Map({
        pair: List.of('Trainspotting', 'Eternal Sunshine')
      });

      const nextState = vote(state, 'Trainspotting');

      expect(nextState).to.equal(Map({
          pair: List.of('Trainspotting', 'Eternal Sunshine'),
          tally: Map({
            'Trainspotting': 1
          })
      }));
    });

    it("adds a existing tally for the voted entry", () => {

      const state = Map({
        pair: List.of('Trainspotting', 'Eternal Sunshine'),
        tally: Map({ 'Trainspotting': 3, 'Eternal Sunshine': 2 })
      });

      const nextState = vote(state, 'Trainspotting');

      expect(nextState).to.equal(Map({
        pair: List.of('Trainspotting', 'Eternal Sunshine'),
        tally: Map({ 'Trainspotting': 4, 'Eternal Sunshine': 2 })
      }));

    });
  });

});
