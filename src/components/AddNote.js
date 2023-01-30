import React, {useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote() {
    const context = useContext(noteContext);
    const {addNote} = context;   

    const [note,setNote]=useState({title: "", description:"",tag:"default"});

    const onClickHandler =(e)=>{
        e.preventDefault(); // Prevents the page from reloading
        addNote(note.title,note.description,note.tag);
    }
    const onChange = (e)=>{
        console.log(e.target.name);
        setNote({...note,[e.target.name]:e.target.value});
    }
    return (
    <>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Note Title</label>
            <input type="text" className="form-control" name="title" id="title" onChange={onChange} placeholder="Title of the note"/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" name="description" id="description" rows="3" onChange={onChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick = {onClickHandler}>Submit</button>
    </>
    )
}