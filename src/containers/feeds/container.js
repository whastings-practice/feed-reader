import { connect } from 'react-redux';

import FeedsPage from './components/FeedsPage';

export default connect(
  (state) => ({
    feeds: state.entities.feeds,
  }),
)(FeedsPage);
