import { connect } from 'react-redux';

import FeedsList from './components/FeedsList';
import { closeAddFeed, openAddFeed } from './feedsActions';
import { getFeeds } from '../../entities/selectors';

export default connect(
  (state) => ({
    feeds: getFeeds(state),
    isAddFeedOpen: state.feeds.isAddFeedOpen,
  }),
  {
    onCloseAddFeed: closeAddFeed,
    onOpenAddFeed: openAddFeed,
  },
)(FeedsList);
