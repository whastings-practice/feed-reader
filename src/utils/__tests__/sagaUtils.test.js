import axios from 'axios';
import { call } from 'redux-saga/effects';

import { request } from '../sagaUtils';

describe('sagaUtils', () => {
  describe('request', () => {
    test('it creates effect to send GET request', () => {
      expect(request({ url: '/foo' })).toEqual(call(axios.get, '/foo'));
    });

    describe('when passed POST for method', () => {
      test('it creates effect to send POST request', () => {
        expect(request({ url: '/foo', method: 'post' })).toEqual(call(axios.post, '/foo'));
      });

      describe('when passed params', () => {
        test('it creates request effect with params', () => {
          const params = { foo: 'bar' };
          expect(request({ url: '/foo', method: 'post', params })).toEqual(
            call(axios.post, '/foo', params),
          );
        });
      });
    });
  });
});
