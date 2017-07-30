import { connect } from 'react-redux';

import FeedsPage from './components/FeedsPage';
import { getFeeds } from '../../entities/selectors';

export default connect(
  (state) => ({
    feeds: getFeeds(state),
  }),
)(FeedsPage);
