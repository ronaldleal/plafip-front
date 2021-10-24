import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { doSignIn } from "../middleware/client";
import store from "../middleware/state";
import "./index.css";

function AppLogin() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const user = {
      correo: form.elements.correo.value,
      password: form.elements.password.value,
    };
    const response = doSignIn(user);
    console.log("response =>", response);
    store.dispatch({type: "LOGIN", value: response});
    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label sm="2">Correo Electronico</Form.Label>
              <Form.Control
                name="correo"
                type="email"
                placeholder="Ingresar correo"
              />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row className="fila_password">
          <Col></Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label sm="2">Contraseña</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="*********"
              />
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
