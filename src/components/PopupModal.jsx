import React from 'react';
import Modal from 'react-bootstrap/Modal';
import QRCode from 'qrcode.react';

const PopupModal = ({ show, handleClose, orderId, claimUrl }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <p>Order ID: {orderId}</p> */}
        <QRCode value={claimUrl} />
      </Modal.Body>
    </Modal>
  );
};

export default PopupModal;