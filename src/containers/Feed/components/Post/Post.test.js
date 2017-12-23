import React from 'react';
import { shallow } from 'enzyme';

import Post from './Post';

describe('Post', () => {
  let props;
  let wrapper;

  function render() {
    wrapper = shallow(<Post {...props} />);
  }

  beforeEach(() => {
    props = {
      post: {
        title: 'Foo',
        link: '/foo',
        description: '<p>Foo!</p>',
      },
    };
    render();
  });

  test('it renders a post title and description', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it links title to the post link', () => {
    const link = wrapper.find('a');
    expect(link).toHaveProp('href', props.post.link);
    expect(link).toHaveProp('target', '_blank');
    expect(link).toHaveProp('rel', 'noopener');
    expect(link).toHaveText(props.post.title);
  });

  describe('when post has published at info', () => {
    beforeEach(() => {
      Object.assign(props.post, {
        publishedAt: '2018-01-01',
        publishedAtFormatted: 'January 1, 2018',
      });
      render();
    });

    test('it renders the info in a <time> element', () => {
      const timeEl = wrapper.find('time');
      expect(timeEl).toHaveProp('dateTime', props.post.publishedAt);
      expect(timeEl).toHaveText(props.post.publishedAtFormatted);
    });
  });
});
