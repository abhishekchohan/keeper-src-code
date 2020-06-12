import React from "react";
import { Modal } from "react-bootstrap";

// Expanded Note component which recieve few states from parent component as props.

function ExpandedNote(props) {

	// Destructuring the states from props
  const {
    show,
    handleClose,
    expandNote: { noteTitle, noteContent }
  } = props;

  const str = String(noteContent);

  //Returning a modal (Bootstrap Library Component)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{noteTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalBody"><>{str.split('\n').map((item, i) => <p key={i}>{item}</p>)}</>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ExpandedNote;
