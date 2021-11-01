import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { doSignIn } from "../../../middleware/client";
import { isLoggedIn } from "../../../middleware/login";
import "./index.css";

const isUserValid = (user) => {
  return (
    user !== undefined &&
    user.correo !== undefined &&
    user.correo.length > 0 &&
    user !== undefined &&
    user.password !== undefined &&
    user.password.length > 0
  );
};

function AppLogin() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loginState, setLoginState] = useState({
    validated: false,
    user: {
      correo: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!isLoggedIn(user) && isUserValid(loginState.user)) {
      doSignIn(loginState.user).then((data) => {
        dispatch({ type: "LOGIN", value: data });
      });

      setLoginState({
        validated: false,
        user: {
          correo: "",
          password: "",
        },
      });
    } else if (loginState.validated === true) {
      setLoginState({
        validated: false,
        user: {
          correo: "",
          password: "",
        },
      });
    }
  }, [user, loginState, dispatch]);

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

  if (isLoggedIn(user)) {
    return <Redirect push to="/home" />;
  }

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      validated={loginState.validated}
      email={loginState.user.correo}
      password={loginState.user.password}
    />
  );
}

const LoginForm = ({ handleSubmit, validated, email, password }) => {
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
                defaultValue={email}
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
                defaultValue={password}
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
};

export default AppLogin;
