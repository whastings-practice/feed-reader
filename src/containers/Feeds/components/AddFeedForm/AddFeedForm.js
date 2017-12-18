import React from 'react';
import { Formik } from 'formik';

import Alert from 'reactstrap/lib/Alert';
import Button from 'reactstrap/lib/Button';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';

import Autofocus from '../../../../components/Autofocus';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

function renderForm(props) {
  const { errors, handleChange, handleSubmit, onClose, isSubmitting, values } = props;

  const urlError = errors && errors.url;

  return (
    <form onSubmit={handleSubmit}>
      <ModalHeader toggle={onClose}>Add Feed</ModalHeader>
      <ModalBody>
        {errors &&
          <Autofocus>
            <Alert color="danger">
              Adding feed failed.
            </Alert>
          </Autofocus>
        }
        <FormGroup>
          <Label htmlFor="feed-url-input">URL:</Label>
          <Input
            id="feed-url-input"
            name="url"
            type="url"
            onChange={handleChange}
            value={values.url}
            disabled={isSubmitting}
            className={urlError ? 'is-invalid' : ''}
            aria-invalid={!!urlError}
            aria-describedby="feed-url-input-desc"
            required
          />
          <div id="feed-url-input-desc" className="invalid-feedback">
            {urlError}
          </div>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        {isSubmitting && <LoadingSpinner />}
        <Button color="primary" disabled={isSubmitting}>Add</Button>
        <Button
          className="qa-close-btn"
          color="Secondary"
          onClick={onClose}
          type="button"
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </ModalFooter>
    </form>
  );
}

export default function AddFeedForm(props) {
  if (!props.isOpen) {
    return null;
  }

  return (
    <Modal isOpen={true} toggle={props.onClose}>
      <Formik
        initialValues={{ url: '' }}
        onSubmit={(values) => props.onSubmit(values.url)}
        render={(fProps) => renderForm({ ...fProps, ...props })}
      />
    </Modal>
  );
}
