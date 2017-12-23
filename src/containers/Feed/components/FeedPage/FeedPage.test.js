import React from 'react';
import { shallow } from 'enzyme';

import FeedPage from './FeedPage';

describe('FeedPage', () => {
  let props;
  let wrapper;

  function render() {
    wrapper = shallow(<FeedPage {...props} />);
  }

  beforeEach(() => {
    props = {
      feed: {
        title: 'Foo Bar',
        posts: [
          { title: 'Foo', link: '/foo' },
          { title: 'Bar', link: '/bar' },
        ],
      },
    };
    render();
  });

  test('it renders a page with a list of posts', () => {
    expect(wrapper).toMatchSnapshot();
    const posts = wrapper.find('Post');
    props.feed.posts.forEach((post, i) => {
      expect(posts.at(i)).toHaveProp('post', post);
    });
  });
});
