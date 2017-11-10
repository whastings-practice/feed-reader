import React from 'react';
import Link from 'redux-first-router-link';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';

import FeedsContainer from '../containers/Feeds/FeedsContainer';

export default function Page(props) {
  return (
    <div>
      <Navbar>
        <Container>
          <NavbarBrand tag="h1">
            <Link to="/">Read &apos;Dem Feeds!</Link>
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
