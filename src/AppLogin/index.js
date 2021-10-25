import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { doSignIn } from "../middleware/client";
import store from "../middleware/state";
import "./index.css";

function AppLogin() {
  const [loginState, setLoginState] = useState({
    validated: false,
    user: {
      correo: "",
      password: ""
    }
  });

  useEffect(() => {
    if (isUserValid(loginState.user)) {
      doSignIn(loginState.user).then((user) => {
        store.dispatch({ type: "LOGIN", value: user });
      });
      setLoginState({
        validated: false,
        user: {
          correo: "",
          password: ""
        },
      });
    } else if (loginState.validated === true) {
      setLoginState({
        validated: false,
        user: {
          correo: "",
          password: ""
        },
      });
    }
  }, [loginState]);

  const isUserValid = (user) => {
    const isCorreoValid = user?.correo !== undefined && user?.correo.length > 0;
    const isPasswordValid =
      user?.password !== undefined && user?.password.length > 0;
    return user !== undefined && isCorreoValid && isPasswordValid;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      const user = {
        correo: form.elements.correo.value,
        password: form.elements.password.value,
      };

      setLoginState({
        validated: true,
        user: user,
      });
    }
  };

  return (
    <Container>
      <Form noValidate validated={loginState.validated} onSubmit={handleSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label sm="2">Correo Electronico</Form.Label>
              <Form.Control
                name="correo"
                type="email"
                placeholder="Ingresar correo"
                defaultValue={loginState.user.correo}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un correo valido.
              </Form.Control.Feedback>
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
                defaultValue={loginState.user.password}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese su contraseña.
              </Form.Control.Feedback>
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
