import './Nav.css';
import React from 'react';
import 'tachyons';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='cont'>
      <link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet"/>
        <Navbar color="black-60" light expand="md" className="bb bw2 b--black-60 nav ">
          <NavbarBrand className='sega'href="/">Jungle Juice Games</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto "  navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact/">Contact</NavLink>
              </NavItem>
             <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Games
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/mech/">
                     Coming Soon...
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/web/">
                     Coming Soon...
                  </DropdownItem>
                  
                  <DropdownItem href="/mobile/">
                    Coming Soon...
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
  }


}
