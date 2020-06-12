// This is semi-implemented Component which allow 
// Work need to be done on this component yet..

import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import axios from "axios";

const ImgUpload = props => {
  const { show, handleClose } = props;
  const [img, setImg] = useState("");
  const handleUpload = e => {
    e.preventDefault();
    console.log(e.target.file);
    // here upload img code fetch/axios statements will be added later on..
};
  const handleImg = e => {
    setImg(e.target.value);
    console.log(e.target.files);

    // console.log(e.target.value);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attach Image to Note</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalBody">
          <Form onSubmit={handleUpload}>
            <input
              type="file"
              name="img"
              id="img"
              value={img}
              onChange={handleImg}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <img src={img} alt="img" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImgUpload;
