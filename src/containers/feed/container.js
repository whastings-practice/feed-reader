import { connect } from 'react-redux';

import FeedPage from './components/FeedPage';

export default connect(
  (state) => ({
    feed: state.entities.feeds.find((feed) => feed.id === state.location.payload.id),
  })
)(FeedPage);
