import React from "react";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";



import logotipo from "../../assets/logotipos/logotipoheader.png";

export const Header = () => {
  const dispatch = useDispatch();
  const { nombres, imagen } = useSelector((state) => state.auth);


  // const avatar=require("./assets/avatars/1608317790612.jpg");

  // console.log(avatar);
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="header__container">
      <Navbar className="navbar_blanca" expand="lg">
        <Navbar.Brand href="#home">
          <img className="logotipoheader" src={logotipo} alt="ServiHabitat" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto padright">
            <Nav.Link href="#home">
              <i className="fas fa-inbox"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fas fa-bell"></i>
            </Nav.Link>

            <NavDropdown
              className="robotomedium header__nombreuser"
              title={
                <div className="pull-right">



{/* 
                  <img
                    src='./assets/avatars/1608317790612.jpg'
                    alt={nombres}
                  /> */}

                  {nombres}
                </div>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> Desconectar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
