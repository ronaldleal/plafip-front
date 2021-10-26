import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/logo.png";

function AppNav() {
  const user = JSON.parse(localStorage.getItem("user"));

  const LoggedInNav = () => {
    return (
    <>
      <Nav.Link href="/registrar-usuario">Registro</Nav.Link>
          <Nav.Link href="/movimientos">Movimientos</Nav.Link>
          <Nav.Link href="/balance">Balance</Nav.Link>
          <Nav.Link href="/proyecciones">Proyecciones</Nav.Link>
          <Nav.Link href="/educcacion">Educaccion Financiera</Nav.Link>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Logueado como: <a href="#">{user.correo}</a>
            </Navbar.Text>
          </Navbar.Collapse>
    </>
    )
  };

  const NotLoggedInNav = () => {
    return (
      <>
        <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
        <Nav.Link href="/registrar-usuario">Registro</Nav.Link>
      </>
    )
  }

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
          {user.correo && user.jwt.length > 0 ? <LoggedInNav /> : <NotLoggedInNav />}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNav;
