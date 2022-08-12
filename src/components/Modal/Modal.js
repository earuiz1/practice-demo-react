import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div>
      <div className="overlay"></div>
      <div className="modal-card">
        <div className="modal-header">
          <h2>Header</h2>
        </div>
        <div className="modal-body">
          <h3>Body</h3>
        </div>
        <div className="modal-footer">
          <button type="button" onClick = {props.closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
