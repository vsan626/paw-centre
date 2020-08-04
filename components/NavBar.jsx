import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link href="/" passHref>
          <Navbar.Brand href="/">Paw Centre</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/" passHref>
            <Nav.Link>Shop</Nav.Link>
          </Link>
          <Link href="/" passHref>
            <Nav.Link>Blog</Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Sniff around..."
            className="mr-sm-2"
          />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
