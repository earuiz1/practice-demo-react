import React from "react";
import './BackDrop.css';

function BackDrop(props) {
  return <div className="backdrop" onClick={props.closeModal}></div>;
}

export default BackDrop;
