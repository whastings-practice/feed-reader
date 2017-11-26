import React from 'react';
import Link from 'redux-first-router-link';

import Button from 'reactstrap/lib/Button';

import AddFeedForm from './AddFeedForm';

export default function FeedsList(props) {
  const { feeds } = props;

  return (
    <section>
      <h2>Feeds</h2>
      <ul>
        {feeds.map((feed) => (
          <li key={feed.id}>
            <Link to={`/feeds/${feed.id}`}>{feed.title}</Link>
          </li>
        ))}
      </ul>
      <Button color="primary" onClick={props.onOpenAddFeed}>Add Feed</Button>
      <AddFeedForm
        errors={props.addFeedErrors}
        isOpen={props.isAddFeedOpen}
        isSubmitting={props.isAddFeedSubmitting}
        onClose={props.onCloseAddFeed}
        onSubmit={props.onSubmitAddFeed}
      />
    </section>
  );
}
