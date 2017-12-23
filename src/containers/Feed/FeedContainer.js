import { connect } from 'react-redux';

import { getCurrentFeed } from '../../entities/selectors';
import FeedPage from './components/FeedPage/FeedPage';

export default connect(
  (state) => ({
    feed: getCurrentFeed(state),
  })
)(FeedPage);
