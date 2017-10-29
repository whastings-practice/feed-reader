import React from 'react';
import Link from 'redux-first-router-link';
import { Container, Header, Menu } from 'semantic-ui-react';

export default function Page(props) {
  return (
    <div>
      <header>
        <Menu size="massive" borderless>
          <Container>
            <Header as="h1">
              <Link to="/">Read &apos;Dem Feeds!</Link>
            </Header>
          </Container>
        </Menu>
      </header>
      <Container>
        {props.children}
      </Container>
    </div>
  );
}
