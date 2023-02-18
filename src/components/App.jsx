import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // save state
  const [Notes, setNotes] = useState([]);
  // add function
  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }
  // delete function
  function deleteNote(not) {
    setNotes((prev) => {
      return prev.filter((lola, index) => {
        return index !== not;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {Notes.map((lola, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={lola.title}
            content={lola.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
