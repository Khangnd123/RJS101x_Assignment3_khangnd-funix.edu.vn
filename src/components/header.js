import React, { Component } from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { NavLink, HashRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isNavOpen: false };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <NavbarBrand className="mr_auto" href="/">
                <img
                  src="/assets/images/alberto.png"
                  height="30"
                  width="40"
                  alt="alberto"
                />
              </NavbarBrand>
              <Nav navbar>
                <HashRouter>
                  <NavItem>
                    <NavLink className="nav-Link" to="/home">
                      <span className="fa fa-home fa-lg"></span>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-Link" to="/menu">
                      <span className="fa fa-user-o"></span>Nhân viên
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-Link" to="/phongban">
                      <span className="fa fa-address-card-o"></span>Phòng bang
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-Link" to="/bangluong">
                      <span className="fa fa-cc-diners-club"></span>Bảng lương
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-Link" to="/timkiem">
                      <span className="fa fa-search"></span>Tìm kiếm
                    </NavLink>
                  </NavItem>
                </HashRouter>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
