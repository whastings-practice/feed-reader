import { connect } from 'react-redux';

import FeedsList from './components/FeedsList';
import { getFeeds } from '../../entities/selectors';

export default connect(
  (state) => ({
    feeds: getFeeds(state),
  }),
)(FeedsList);
