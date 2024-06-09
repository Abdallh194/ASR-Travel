import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmContact({ showModal, Username, Email }) {
  const [show, setShow] = useState(showModal);
  console.log(showModal);

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Important warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank You Mr/Mrs {Username} We will read your request carefully and
          will respond to you as soon as possible via {Email}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmContact;
