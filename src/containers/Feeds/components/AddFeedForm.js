import React from 'react';
import { withFormik } from 'formik';

import Button from 'reactstrap/lib/Button';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';

function AddFeedForm(props) {
  const { handleChange, handleSubmit, values } = props;

  return (
    <Modal isOpen={props.isOpen} toggle={props.onClose}>
      <ModalHeader toggle={props.onClose}>Add Feed</ModalHeader>
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <FormGroup>
            <Label htmlFor="feed-url-input">URL:</Label>
            <Input
              id="feed-url-input"
              name="url"
              type="url"
              onChange={handleChange}
              value={values.url}
              required
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Add</Button>
          <Button color="Secondary" onClick={props.onClose} type="button">
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    url: '',
  }),
  handleSubmit: (values, { props }) => props.onSubmit(values.url),
})(AddFeedForm);
