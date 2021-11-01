import React, { useCallback, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const DeleteModal = ({ movement, handler }) => {
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const handleShow = useCallback(() => {
    setShow(true);
  }, [setShow]);

  return (
    <>
      <Button
        key={`id_update_${movement.id}`}
        onClick={handleShow}
        variant="outline-danger"
      >
        Eliminar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation(); 
          handler({id: movement.id })
        }}>
          <Modal.Header closeButton>
            <Modal.Title>Eliminar Movimiento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¿Estas seguro que quieres eliminar el movimiento {movement.id}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Regresar
            </Button>
            <Button variant="danger" type="submit">
              Eliminar Movimiento
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default DeleteModal;
