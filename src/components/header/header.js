/* eslint-disable no-unused-expressions */
import React from 'react';
import { Navbar, NavItem, Row } from 'react-materialize';

const Header = () => (
  <Row>
    <Navbar className="grey darken">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/">Contact</NavItem>
    </Navbar>
  </Row>
);
export default Header;
