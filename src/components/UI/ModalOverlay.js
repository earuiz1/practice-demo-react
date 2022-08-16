import React from "react";
import './ModalOverlay.css';

function ModalOverlay(props) {
  return (
    <div className="modal-card">
      <div className="modal-header">
        <h2>{props.headerMsg}</h2>
      </div>
      <div className="modal-body">
        <h3>{props.bodyMsg}</h3>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={props.closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalOverlay;
