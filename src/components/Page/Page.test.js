import React from 'react';
import { shallow } from 'enzyme';

import Page from './Page';

describe('<Page />', () => {
  let wrapper;

  function render() {
    wrapper = shallow(
      <Page>
        <div>Child</div>
      </Page>
    );
  }

  beforeEach(() => {
    render();
  });

  test('it renders site nav, feeds list, and any children', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
