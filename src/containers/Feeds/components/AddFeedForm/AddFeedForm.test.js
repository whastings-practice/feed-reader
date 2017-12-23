import React from 'react';
import { mount, shallow } from 'enzyme';

import AddFeedForm from './AddFeedForm';

const noop = () => {};

function CallRenderFunction({ fn }) {
  return fn();
}

describe('AddFeedForm', () => {
  let props;
  let renderOutput;
  let wrapper;

  function render() {
    wrapper = shallow(<AddFeedForm {...props} />);
    if (props.isOpen) {
      const renderForm = wrapper.find('Formik').prop('render');
      renderOutput = shallow(<CallRenderFunction fn={renderForm} />);
    }
  }

  beforeEach(() => {
    props = {
      handleChange: noop,
      handleSubmit: noop,
      isOpen: false,
      isSubmitting: false,
      onClose: jest.fn(),
      onSubmit: jest.fn(),
      values: { url: '' },
    };
    render();
  });

  test('it renders nothing by default', () => {
    expect(wrapper.get(0)).toBeNull();
  });

  describe('when open', () => {
    beforeEach(() => {
      props.isOpen = true;
      render();
    });

    test('it renders a form inside a modal', () => {
      expect(wrapper).toMatchSnapshot();
      expect(renderOutput).toMatchSnapshot();
    });

    test('it calls onClose prop when modal triggers close', () => {
      wrapper.find('Modal').prop('toggle')();
      expect(props.onClose).toHaveBeenCalledTimes(1);

      renderOutput.find('ModalHeader').prop('toggle')();
      expect(props.onClose).toHaveBeenCalledTimes(2);
    });

    test('it calls onClose prop when close button is clicked', () => {
      renderOutput.find('.qa-close-btn').simulate('click');
      expect(props.onClose).toBeCalled();
    });

    describe('when isSubmitting prop is true', () => {
      beforeEach(() => {
        props.isSubmitting = true;
        render();
      });

      test('it disables the text input and the buttons', () => {
        expect(renderOutput.find('Input')).toHaveProp('disabled', true);
        renderOutput.find('Button').forEach((buttonWrapper) => {
          expect(buttonWrapper).toHaveProp('disabled', true);
        });
      });

      test('it displays a loading spinner', () => {
        expect(renderOutput.find('LoadingSpinner')).toBePresent();
      });
    });

    describe('with errors', () => {
      beforeEach(() => {
        props.errors = { url: 'URL is invalid' };
        render();
      });

      test('it renders an autofocused alert', () => {
        const alert = renderOutput.find('Alert');
        expect(alert).toHaveProp('color', 'danger');
        expect(alert.parent()).toMatchSelector('Autofocus');
      });

      test('it marks input as invalid and associates an error message', () => {
        const input = renderOutput.find('Input');
        const errorMessage = renderOutput.find(`#${input.prop('aria-describedby')}`);
        expect(input).toHaveClassName('is-invalid');
        expect(input).toHaveProp('aria-invalid', true);
        expect(errorMessage).toHaveText(props.errors.url);
      });
    });

    describe('when filling out the form', () => {
      function getInput() {
        return wrapper.find('input');
      }

      function renderForm() {
        const form = shallow(<AddFeedForm {...props} />).find('Modal').childAt(0).get(0);
        wrapper = mount(<div>{form}</div>);
      }

      beforeEach(() => {
        delete props.handleChange;
        delete props.handleSubmit;
        delete props.values;
        renderForm();
        const input = getInput();
        input.simulate('change', {
          target: { value: 'foobar', name: input.prop('name') },
        });
      });

      test('it updates input value', () => {
        expect(getInput()).toHaveProp('value', 'foobar');
      });

      describe('when submitting the form', () => {
        beforeEach(() => {
          wrapper.find('form').simulate('submit');
        });

        test('it invokes onSubmit prop with input value', () => {
          expect(props.onSubmit).toHaveBeenCalledWith('foobar');
        });
      });
    });
  });
});
