import { connect } from 'react-redux';

import FeedsList from './components/FeedsList';
import { closeAddFeed, openAddFeed, submitAddFeed } from './feedsActions';
import { getEntityErrors, getFeeds } from '../../entities/selectors';

export default connect(
  (state) => ({
    addFeedErrors: getEntityErrors(state),
    feeds: getFeeds(state),
    isAddFeedOpen: state.feeds.isAddFeedOpen,
    isAddFeedSubmitting: state.feeds.isAddFeedSubmitting,
  }),
  {
    onCloseAddFeed: closeAddFeed,
    onOpenAddFeed: openAddFeed,
    onSubmitAddFeed: submitAddFeed,
  },
)(FeedsList);
