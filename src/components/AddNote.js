import React, {useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote(props) {
    const context = useContext(noteContext);
    const {addNote} = context;   

    const [note,setNote]=useState({title: "", description:"",tag:""});

    const onClickHandler =(e)=>{
        // e.preventDefault(); // Prevents the page from reloading
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
    }
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
    return (
    <>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Note Title</label>
            <input type="text" className="form-control" name="title" id="title" onChange={onChange} value={note.title} placeholder="Title of the note"/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" name="description" id="description" rows="3" value={note.description} placeholder="Description of the note" onChange={onChange}></textarea>
        </div>
        <div className="mb-3">
            <label htmlFor="tag" className="form-label">Note Tag</label>
            <input type="text" className="form-control" name="tag" id="tag" onChange={onChange} value={note.tag} placeholder="Tag of the note"/>
        </div>
        <button type="submit" disabled={note.title.length<3 || note.description.length<5} className="btn btn-primary" onClick = {onClickHandler}>Add Note</button>
    </>
    )
}
