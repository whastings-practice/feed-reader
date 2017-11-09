import React from 'react';
import Link from 'redux-first-router-link';

export default function FeedsPage(props) {
  const { feeds } = props;

  return (
    <section>
      <h1>Feeds Page</h1>
      <ul>
        {feeds.map((feed) => (
          <li key={feed.id}>
            <strong>Title:</strong> {feed.title} |
            <string>URL:</string> {feed.url} |
            (<Link to={`/feeds/${feed.id}`}>View Posts</Link>)
          </li>
        ))}
      </ul>
    </section>
  );
}
