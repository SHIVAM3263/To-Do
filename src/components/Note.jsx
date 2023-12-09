import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import UpdateIcon from "@material-ui/icons/Update";


function Note(props) {
  const[EditedTitle,setEditedTitle]=useState(props.title);
  const[EditedContent,setEditedContent]=useState(props.content);
  
  function handleClick() {
    props.onDelete(props.id);
  }
  
  function handleEdit(){
    props.onEdit(props.id);
  }
  
  function handleUpdate(){
    props.onUpdate(props.id,{
      title:EditedTitle,
      content:EditedContent,
    });
  }

  return (
    
    <div className="note">
      {props.isEditing?(
        <>
       <input
            type="text"
            value={EditedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={EditedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="Take a note..."
            rows={3} 
          />
          <button onClick={handleUpdate}><UpdateIcon /></button>
     
        </>
      ):(
        <>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onClick ={handleEdit}>
      <EditIcon />
      </button>
      </>
      )
}
    </div>
  );
}

export default Note;
