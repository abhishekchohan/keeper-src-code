import React, { useState } from "react";
import IForm from "./IForm";
import Notes from "./Notes";


// using initial state as an array of objects which we pass on as props to Iform and Notes components


function Content() {
  const [notes, setNotes] = useState([{
    titleInput: "Welcome to Keeper App",
    noteInput: "1. Click on any note to expand it. \n2. Click on delete button to delete this.\n3. Create new ones using the form provided."
  },
  {
    titleInput: "This is lorem ipsum",
    noteInput: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
  },
  {
    titleInput: "Where can I get some?",
    noteInput: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. "
  }]);

  // This state is passed to see if user click on any note..
  // if yes then expand the note into model with its full contents..
  
  const [expandform, setExpandForm] = useState(false);

  return (
    <div className="content">
      <IForm
        expandform={expandform}
        setExpandForm={setExpandForm}
        setNotes={setNotes}
      />
      <Notes setExpandForm={setExpandForm} notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default Content;
