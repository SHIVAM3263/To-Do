import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [EdditingNote,setEdditingNote]= useState(null);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  function Editnote(id){
    setEdditingNote(id);
  }
  function UpdateNote(id,UpdatedNote){
  setNotes(prevNotes=>{
    const UpdatedNotes=[...prevNotes];
    UpdatedNotes[id]=UpdatedNote;
    return UpdatedNotes;
  });
  setEdditingNote(null);
  }
 
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={Editnote}
            onUpdate={UpdateNote}
            isEditing={EdditingNote===index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
