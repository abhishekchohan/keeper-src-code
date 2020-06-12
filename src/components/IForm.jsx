import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Form from "react-bootstrap/Form";
import Collapse from "@material-ui/core/Collapse";
import Zoom from "@material-ui/core/Zoom";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
// import ImgUpload from "./ImgUpload";

function IForm(props) {
  const { setNotes, expandform, setExpandForm } = props;
  const [formInput, setFormInput] = useState({
    titleInput: "",
    noteInput: ""
  });

  // Following is semi-implemented functionality for adding a picture to the note.
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = e => {
  //   e.preventDefault();
  //   setShow(true);
  // };

  function updateInput(event) {
    if (!expandform) {
      expandTheForm(true);
    } else {
      const value = event.target.value;
      const name = event.target.name;
      setFormInput(prevState => {
        return { ...prevState, [name]: value };
      });
    }
  }

  function addNote(event) {
    if (formInput.noteInput && formInput.titleInput) {
      setNotes(prevState => {
        return prevState ? [...prevState, formInput] : [formInput];
      });
      setFormInput({
        titleInput: "",
        noteInput: ""
      });
    }
    event.preventDefault();
  }

  function expandTheForm() {
    setExpandForm(true);
  }

  return (
    <form className="form">
      {/* <ImgUpload show={show} handleClose={handleClose} /> */}
      {expandform && (
        <Collapse in={true}>
          <input
            autoFocus={expandform && true}
            autoComplete="off"
            onChange={updateInput}
            className="titleInput"
            name="titleInput"
            type="text"
            placeholder="Title"
            value={formInput.titleInput}
          />
        </Collapse>
      )}

      <Form.Control
        as="textarea"
        rows={expandform ? "4" : "1"}
        onClick={expandTheForm}
        className="textfield noteInput"
        plaintext
        placeholder="Take a note"
        name="noteInput"
        value={formInput.noteInput}
        autoFocus={true}
        onChange={updateInput}
        autoComplete="off"
      />
      {/* {expandform && (
        <Zoom in={true}>
          <button onClick={handleShow} className="addButton galleryButton">
            <CropOriginalIcon />
          </button>
        </Zoom>
      )} */}
      {expandform && (
        <Zoom in={true}>
          <button type="submit" onClick={addNote} className="addButton">
            <AddIcon />
          </button>
        </Zoom>
      )}
    </form>
  );
}

export default IForm;
