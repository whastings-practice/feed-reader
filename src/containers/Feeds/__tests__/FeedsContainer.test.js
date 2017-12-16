import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import FeedsContainer from '../FeedsContainer';
import { closeAddFeed, openAddFeed, submitAddFeed } from '../feedsActions';
import { getEntityErrors, getFeeds } from '../../../entities/selectors';

jest.mock('../../../entities/selectors');

describe('FeedsContainer', () => {
  let feedsList;
  let mockAddFeedErrors;
  let mockFeeds;
  let mockState;
  let mockStore;
  let wrapper;

  function render() {
    wrapper = shallow(<FeedsContainer store={mockStore} />);
    feedsList = wrapper.find('FeedsList');
  }

  beforeEach(() => {
    mockState = {
      feeds: {
        isAddFeedOpen: true,
        isAddFeedSubmitting: false,
      },
    };
    mockStore = configureStore()(mockState);
    mockAddFeedErrors = { foo: 'bar' };
    mockFeeds = ['feed1', 'feed2'];
    getEntityErrors.mockReturnValue(mockAddFeedErrors);
    getFeeds.mockReturnValue(mockFeeds);
    render();
  });

  test('it passes feeds list and add feed form state to FeedsList', () => {
    expect(getEntityErrors).toBeCalledWith(mockState);
    expect(feedsList).toHaveProp('addFeedErrors', mockAddFeedErrors);

    expect(getFeeds).toBeCalledWith(mockState);
    expect(feedsList).toHaveProp('feeds', mockFeeds);

    expect(feedsList).toHaveProp('isAddFeedOpen', mockState.feeds.isAddFeedOpen);
    expect(feedsList).toHaveProp('isAddFeedSubmitting', mockState.feeds.isAddFeedSubmitting);
  });

  test('it dispatches closeAddFeed when FeedsList calls onCloseAddFeed', () => {
    feedsList.simulate('closeAddFeed');
    expect(mockStore.getActions()).toEqual([closeAddFeed()]);
  });

  test('it dispatches openAddFeed when FeedsList calls onOpenAddFeed', () => {
    feedsList.simulate('openAddFeed');
    expect(mockStore.getActions()).toEqual([openAddFeed()]);
  });

  test('it dispatches submitAddFeed when FeedsList calls onSubmitAddFeed', () => {
    feedsList.simulate('submitAddFeed', '/foo');
    expect(mockStore.getActions()).toEqual([submitAddFeed('/foo')]);
  });
});
