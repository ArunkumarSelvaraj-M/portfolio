import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, image, heading, paragraph }) => {
  if (!isOpen) return null; // Don't show the modal if it's not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <img src={image} alt="modal" className="modal-image" />
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Modal;
