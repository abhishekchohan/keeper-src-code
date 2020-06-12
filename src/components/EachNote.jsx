import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

// EachNote component that recieves the note,setNote state as prop

function EachNote(props) {

	// Checking whether user triggers Delete  or view note functionality..
	// we passed event, param = "view" or "delete" and Eachnote id = recId
	// stopPropagation is used as to stop parent element from triggering new event when child element is triggered.
  function viewNote(e, param, recId) {
    if (param === "delete") {
      const id = recId - 1;
      props.setNotes(prevState => {
        prevState.splice(id, 1);
        return [...prevState];
      });
      console.log("delete");
      e.stopPropagation();
    } else {
      props.setExpandNote({
        noteTitle: props.noteTitle,
        noteContent: props.noteContent
      });
      props.handleShow();
    }
  }

  return (
    <div onClick={e => viewNote(e, "view")} className="eachNote">
      <p className="noteTitle">{props.noteTitle}</p>
      <p className="noteContent">
        {
          props.noteContent.split('\n').map((item, i) => <div key={i} > {item}<br /></div>)
        }
      </p>
      <div>
        <button
          onClick={e => viewNote(e, "delete", props.id)}
          className="delete"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default EachNote;
