import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { isLoggedIn, isValidUser } from "../../../middleware/login";
import ROUTES from "../../../routes";
import logo from "../../../images/logo.png";

function AppNav() {
  const user = useSelector((state) => isValidUser(state.user));
  const LoggedInNav = () => {
    return (
      <>
        <Nav.Link href={ROUTES.MOVIMIENTOS}>Movimientos</Nav.Link>
        <Nav.Link href={ROUTES.BALANCE}>Balance</Nav.Link>
        <Nav.Link href={ROUTES.LOGOUT}>Desconectarse</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Logueado como: <a href="/#">{user.correo}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </>
    );
  };

  const NotLoggedInNav = () => {
    return (
      <>
        <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
        <Nav.Link href="/registrar-usuario">Registro</Nav.Link>
      </>
    );
  };

  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="50px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          {isLoggedIn(user) ? <LoggedInNav /> : <NotLoggedInNav />}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNav;
