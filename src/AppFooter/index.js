import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

function AppFotter() {
  return (
    <Container>
      <Row>
        <Col>
          <p className="footer-element">Facebook</p>
        </Col>
        <Col>
          <p className="footer-element">Instagram</p>
        </Col>
        <Col>
          <p className="footer-element">Twitter</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="footer-element">© 2021 Copyright: PLAFIP</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AppFotter;
