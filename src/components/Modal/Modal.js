import React from "react";
import "./Modal.css";

function Modal() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="modal-card">
        <div className="modal-header">
          <h2>Title</h2>
        </div>
        <div className="modal-body">
          <h3>Body</h3>
        </div>
        <div className="modal-footer">
          <button type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
