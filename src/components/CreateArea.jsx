import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function manageInput(event) {
    const { name, value } = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function clickNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={manageInput}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={manageInput}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={clickNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
