import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, image, heading, paragraph, description }) => {
  if (!isOpen) return null; // Don't show the modal if it's not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="model-cover">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p className="modal-close" onClick={onClose}>X</p>
          <img src={image} alt="modal" className="modal-image" />
          <h3>{heading}</h3>
          <p>{paragraph}</p>
          <p>The resources below were used in this project.</p>
        </div>

        <ul>
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))
          }
        </ul>
      </div>

    </div>
  );
};

export default Modal;
