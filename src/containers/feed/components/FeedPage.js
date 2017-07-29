import React from 'react';

export default function FeedPage(props) {
  const { feed } = props;

  if (!feed.posts) {
    return null;
  }

  return (
    <section>
      <h2>{feed.title}</h2>
      <ul>
        {feed.posts.map((post) => (
          <li key={post.url}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
