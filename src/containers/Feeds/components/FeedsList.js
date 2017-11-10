import React from 'react';
import Link from 'redux-first-router-link';

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
    </section>
  );
}
