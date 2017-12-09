import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { receiveFeeds } from '../actions';
import { feedsSchema } from '../schemas';
import { loadFeeds } from '../sagas';

describe('Entities Sagas', () => {
  describe('loadFeeds', () => {
    let gen;

    beforeEach(() => {
      gen = loadFeeds();
    });

    test('it calls feeds api and sends normalized data to the store', () => {
      const fakeResponse = {
        data: { foo: 'bar' },
      };
      const fakeNormalizedData = {
        entities: { baz: 'qux' },
      };

      const apiCallEffect = gen.next().value;
      expect(apiCallEffect).toEqual(call(axios.get, '/api/feeds'));

      const normalizeEffect = gen.next(fakeResponse).value;
      expect(normalizeEffect).toEqual(call(normalize, fakeResponse.data, feedsSchema));

      const actionEffect = gen.next(fakeNormalizedData).value;
      expect(actionEffect).toEqual(put(receiveFeeds(fakeNormalizedData.entities)));

      expect(gen.next().done).toBe(true);
    });
  });
});
