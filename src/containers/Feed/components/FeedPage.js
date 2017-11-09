import React from 'react';

export default function FeedPage(props) {
  const { feed } = props;

  return (
    <section>
      <h2>{feed.title}</h2>
      <ul>
        {feed.posts.map((post) => (
          <li key={post.link}>
            <a href={post.link} target="_blank" rel="noopener">{post.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
