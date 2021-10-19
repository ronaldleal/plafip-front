import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AppFotter() {
  return (
    <Container>
      <Row>
        <Col>
          <p>Facebook</p>
        </Col>
        <Col>
          <p>Instagram</p>
        </Col>
        <Col>
          <p>Twitter</p>
        </Col>
      </Row>

      <Row>
        <Col>
        © 2021 Copyright: PLAFIP
        </Col>
      </Row>
    </Container>
  );
}

export default AppFotter;
