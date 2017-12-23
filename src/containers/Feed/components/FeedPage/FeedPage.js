import React from 'react';

import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';

import Post from '../Post/Post';

export default function FeedPage(props) {
  const { feed } = props;

  return (
    <section>
      <h2>{feed.title}</h2>
      <ListGroup>
        {feed.posts.map((post) => (
          <ListGroupItem key={post.link}>
            <Post post={post} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </section>
  );
}
