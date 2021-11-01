import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import UpsertModal from "../UpsertModal";

const obtainValue = (value, property) => {
  if (value !== undefined && value[property] !== undefined) {
    return value[property];
  } else {
    return 0;
  }
};

const AppBalance = ({ balance, handler }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card border="success" style={{ width: "18rem" }} className="mb-1">
              <Card.Header>Ingresos</Card.Header>
              <Card.Body>
                <Card.Title>{obtainValue(balance, "ingresos")}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="danger" style={{ width: "18rem" }} className="mb-1">
              <Card.Header>Egresos</Card.Header>
              <Card.Body>
                <Card.Title>{obtainValue(balance, "egresos")}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="success" style={{ width: "18rem" }} className="mb-1">
              <Card.Header>Balance</Card.Header>
              <Card.Body>
                <Card.Title>
                  {obtainValue(balance, "ingresos") -
                    obtainValue(balance, "egresos")}
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <UpsertModal
              movement={{}}
              operation={"Crear Movimiento"}
              action={"Crear Movimiento"}
              confirmation={"Crear"}
              variant={"primary"}
              handler={handler}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default AppBalance;
