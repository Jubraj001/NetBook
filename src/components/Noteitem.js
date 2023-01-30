import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

export default function NoteItem(props) {
  const {note}=props;
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const onClickHandler=()=>{
    deleteNote(note._id);
  }
  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fa-sharp fa-solid fa-trash mx-2" onClick={onClickHandler} ></i>
            <i className="fa-solid fa-pen-to-square"></i>
        </div>
       </div>
    </div>
  )
}