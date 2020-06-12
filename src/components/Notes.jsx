import React, { useState } from "react";
import EachNote from "./EachNote";
import ExpandedNote from "./ExpandedNote";

// Notes renders EachNote components using array map method.

function Notes(props) {
  const { notes, setNotes } = props;
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [expandNote, setExpandNote] = useState({});
  let counter = 0;
  return (
    <div className="notes">
      <ExpandedNote
        show={show}
        handleClose={handleClose}
        expandNote={expandNote}
      />
      {notes.map(note => (
        <EachNote
          key={counter++}
          id={counter}
          setNotes={setNotes}
          handleShow={handleShow}
          setExpandNote={setExpandNote}
          noteTitle={note.titleInput}
          noteContent={note.noteInput}
        />
      ))}
    </div>
  );
}

export default Notes;
