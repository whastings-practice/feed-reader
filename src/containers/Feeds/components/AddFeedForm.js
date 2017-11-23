import React from 'react';
import { Formik } from 'formik';

import Button from 'reactstrap/lib/Button';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';

function renderForm(props) {
  const { handleChange, handleSubmit, onClose, values } = props;

  return (
    <Modal isOpen={true} toggle={onClose}>
      <ModalHeader toggle={onClose}>Add Feed</ModalHeader>
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
          <Button color="Secondary" onClick={onClose} type="button">
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default function AddFeedForm(props) {
  if (!props.isOpen) {
    return null;
  }

  return (
    <Formik
      initialValues={{ url: '' }}
      onSubmit={(values) => props.onSubmit(values.url)}
      render={(fProps) => renderForm({ ...fProps, ...props })}
    />
  );
}
