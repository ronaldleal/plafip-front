import React, { useCallback, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const UpsertModal = ({
  movement,
  variant,
  action,
  operation,
  confirmation,
  handler,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const handleShow = useCallback(() => {
    setShow(true);
  }, [setShow]);

  const index = movement.id === undefined ? 0 : movement.id;

  return (
    <>
      <Button
        key={`id_update_${index}`}
        onClick={handleShow}
        variant={variant}
      >
        {action}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form
          onSubmit={(e) =>
            {
              handler({ event: e, id: index, type: operation })
              handleClose();
            }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>{operation}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                name={`input_movement_date_${index}`}
                type="date"
                placeholder="Fecha"
                defaultValue={movement.date}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicType">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                name={`input_movement_type_${index}`}
                type="text"
                placeholder="Tipo"
                defaultValue={movement.type}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAmount">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                name={`input_movement_amount_${index}`}
                type="text"
                placeholder="Monto"
                defaultValue={movement.amount}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name={`input_movement_description_${index}`}
                type="text"
                placeholder="Descripcion"
                defaultValue={movement.description}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              {confirmation}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default UpsertModal;
