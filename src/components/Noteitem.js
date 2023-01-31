import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

export default function NoteItem(props) {
  const {note,updateNote}=props;
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const onClickHandler=()=>{
    deleteNote(note._id);
    props.showAlert("Deleted Successfully","success")
  }
  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fa-sharp fa-solid fa-trash mx-2" onClick={onClickHandler} ></i>
            {/* Whenever we need to pass an argument to the function we use arrow function instead of directly using the function 
            because that will lead the code to run immediately when the component is rendered */}
            <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
        </div>
       </div>
    </div>
  )
}