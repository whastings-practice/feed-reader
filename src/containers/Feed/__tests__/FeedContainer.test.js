import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import { getCurrentFeed } from '../../../entities/selectors';
import FeedContainer from '../FeedContainer';

jest.mock('../../../entities/selectors');

describe('FeedContainer', () => {
  let mockCurrentFeed;
  let mockState;
  let mockStore;
  let wrapper;

  function render() {
    wrapper = shallow(
      <FeedContainer store={mockStore} />
    );
  }

  beforeEach(() => {
    mockState = { foo: 'bar' };
    mockStore = configureStore()(mockState);
    mockCurrentFeed = { title: 'Foo Bar' };
    getCurrentFeed.mockReturnValue(mockCurrentFeed);
    render();
  });

  test('it passes current feed to FeedPage', () => {
    expect(getCurrentFeed).toBeCalledWith(mockState);
    const feedPage = wrapper.find('FeedPage');
    expect(feedPage).toHaveProp('feed', mockCurrentFeed);
  });
});
