// Modal.js
import React from "react";
import "./modal.scss";

const Modal = ({ showModal, closeModal }) => {
  if (!showModal) return null; // Do not render modal if not open

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>&times;</span>
        <h5>Place Your Finger In The Sensor</h5>
        <p><img src="./fingerprint.png" width="35%"/></p>
        <p>message here</p>
      </div>
    </div>
  );
};

export default Modal;
