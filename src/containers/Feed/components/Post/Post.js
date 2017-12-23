import React from 'react';

export default function Post({ post }) {
  return (
    <article>
      <h3>
        <a href={post.link} target="_blank" rel="noopener">{post.title}</a>
      </h3>
      {post.publishedAt && <time dateTime={post.publishedAt}>{post.publishedAtFormatted}</time>}
      <div dangerouslySetInnerHTML={{ __html: post.description }} />
    </article>
  );
}
