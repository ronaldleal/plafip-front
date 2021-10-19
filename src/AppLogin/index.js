import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./index.css"

function AppLogin() {
  return (
    <Container>
      <Form>
        <Row>
          <Col></Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label sm="2">Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="Ingresar correo" />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row className="fila_password">
          <Col></Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label sm="2">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="*********" />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row className="fila_boton">
          <Col></Col>
          <Col>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Form>
      <Row className="enlaces_registro">
        <Col></Col>
        <Col>
          <a href="/recordar-clave">Olvidaste tu Contraseña?</a>
        </Col>
        <Col>
          <a href="/registro">Registrate aqui</a>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default AppLogin;
