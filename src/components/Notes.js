import React, {useContext, useEffect, useRef,useState} from 'react'
import NoteContext from'../context/notes/noteContext'
import AddNote from './AddNote';
import NoteItem from './Noteitem';

export default function Notes() {
    const context = useContext(NoteContext);
    const {notes,getNotes,editNote} = context;
    useEffect(()=>{
      // Using useEffect as componentdidMount in class based components
      getNotes();
      // eslint-disable-next-line
    },[])

    const ref = useRef(null);
    const refClose = useRef(null);
    // This will hold the value of the updated note
    const [note,setNote]=useState({id:"",etitle: "", edescription:"",etag:""});
    // Making the Launch demo modal button click through useRef
    const updateNote = (currentNote)=>{
      ref.current.click();
      setNote({id:currentNote._id,etitle: currentNote.title, edescription:currentNote.description, etag:currentNote.tag}); // Will set the edit fields to the current value before editing
    }
    const onClickHandler =(e)=>{
      // e.preventDefault(); // Prevents the page from reloading
      // addNote(note.title,note.description,note.tag);
      editNote(note.id,note.etitle,note.edescription,note.etag); 
      refClose.current.click();
  }
  const onChange = (e)=>{
      setNote({...note,[e.target.name]:e.target.value});
  }
  return (
    <>
    <AddNote/>
    {/* Edit Note Modal */}
    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">Note Title</label>
                <input type="text" className="form-control" name="etitle" id="etitle" onChange={onChange} value={note.etitle}/>
              </div>
              <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <textarea className="form-control" name="edescription" id="edescription" rows="3" value={note.edescription} onChange={onChange}></textarea>
              </div>
              <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Note Tag</label>
                  <input type="text" className="form-control" name="etag" id="etag" onChange={onChange} value={note.etag}/>
              </div>
          </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={onClickHandler}>Update Note</button>
            </div>
          </div>
      </div>
    </div>
    <div className="row my-3">
        <h2>Your notes</h2>
        {/* Providing Unique key*/}
        {notes.map((note)=>{
            return <NoteItem key={note._id} note={note} updateNote={updateNote}/>
        })}
    </div>
    </>
  )
}
