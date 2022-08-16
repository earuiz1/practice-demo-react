import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import ModalOverlay from "./ModalOverlay";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop closeModal={props.closeModal}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          headerMsg={props.headerMsg}
          bodyMsg={props.bodyMsg}
          closeModal={props.closeModal}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
