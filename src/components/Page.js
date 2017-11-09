import React from 'react';
import Link from 'redux-first-router-link';
import Container from 'reactstrap/lib/Container';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';

export default function Page(props) {
  return (
    <div>
      <Navbar>
        <Container>
          <NavbarBrand tag="h1">
            <Link to="/">Read &apos;Dem Feeds!</Link>
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/feeds">Feeds</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        {props.children}
      </Container>
    </div>
  );
}
