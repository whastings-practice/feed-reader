import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';

import styles from './Page.module.css';
import FeedsContainer from '../../containers/Feeds/FeedsContainer';

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Page(props) {
  return (
    <div>
      <Navbar className={styles.navContainer}>
        <Container>
          <NavbarBrand tag="h1">
            <Link to="/" className={styles.brandLink}>Read &apos;Dem Feeds!</Link>
          </NavbarBrand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs="12" sm="3">
            <FeedsContainer />
          </Col>
          <Col xs="12" sm="9">
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Page.propTypes = propTypes;
