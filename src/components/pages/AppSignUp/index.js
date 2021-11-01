import React, { useState } from "react";
import { Col, Container, Form, Row, Button, InputGroup } from "react-bootstrap";
import ROUTES from "../../../routes";
import { Redirect } from "react-router";
import { doSignUp } from "../../../middleware/client";
import "./index.css";

function AppSignUp() {
  const [formState, setFormState] = useState({
    validated: false,
    signUp: false,
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const user = {
      nombre: form.elements.nombre.value,
      usuario: form.elements.correo.value,
      correo: form.elements.correo.value,
      password: form.elements.password.value,
    };

    doSignUp(user);
    setFormState({
      validated: true,
      signUp: true,
    });
  };

  if (formState.signUp){
    return <Redirect push to={ROUTES.HOME} />
  }

  return (
    <SignUpForm handleSubmit={handleSubmit} validated={formState.validated} />
  );
}

const SignUpForm = ({ handleSubmit, validated }) => {
  return (
    <>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col></Col>
            <Col>
              <Form.Group controlId="formBasicName">
                <Form.Label className="plafip-label" sm="2">
                  Nombre
                </Form.Label>
                <Form.Control
                  name="nombre"
                  required
                  placeholder="Nombres Apellidos"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese nombres y apellidos.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label sm="2">Correo</Form.Label>
                <Form.Control
                  type="email"
                  name="correo"
                  required
                  placeholder="correo@ejemplo.com"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un correo valido.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Usuario</Form.Label>
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                  Usuario
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    name="usuario"
                    required
                    placeholder="mi-usuario"
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingrese un usuario valido.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label sm="2">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  placeholder="********"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese una contraseña valida.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Button variant="primary" type="submit">
                Registrate
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default AppSignUp;
