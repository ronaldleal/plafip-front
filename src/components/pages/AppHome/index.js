import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import banner from "../../../images/banner_1.jpg";

function AppHome() {
  return (
    <>
      <Container>
        <Row>
          <Image src={banner} fluid />
        </Row>
      </Container>
      <Container>
        <Col>
          <Col>
            <Row>
              <h3>Nuestro Proposito</h3>
            </Row>
            <Row>
              <p className="lead">
                La finalidad de PLAFIP es hacer más fácil tu vida al momento de
                administrar tu dinero y ser tu confidente en la planeación de
                tus metas y sueños cuando es necesaria una inversión económica.
              </p>
            </Row>
          </Col>

          <Col>
            <Row>
              <h3>Desarrolladores</h3>
            </Row>
            <Row>
              <p className="lead">Camila, Raul, Ronald</p>
            </Row>
          </Col>
          <Col>
            <Row>
              <h3>Agradecimioentos</h3>
            </Row>
            <Row>
              <p className="lead">Unab y MisionTic2022</p>
            </Row>
          </Col>
        </Col>

        <Row className="jumbotron jumbotron-fluid">
          <Container>
            <Row>
              <h3 className="text-center">
                Conoce más sobre Finanzas Personales
              </h3>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Title>
                    La Manera Más Fácil para Entender las Finanzas
                  </Card.Title>
                  <Card.Body>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        title="enteder_finanzas"
                        src="https://www.youtube.com/embed/dUiZ5is-Chw"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Title>
                    Cómo administrar tu dinero con 4 CUENTAS
                  </Card.Title>
                  <Card.Body>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        title="administrar_finanzas"
                        src="https://www.youtube.com/embed/zaj2-42la9Us"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default AppHome;
