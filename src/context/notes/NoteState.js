import NoteContext from './noteContext';
import {useState} from 'react';

const NoteState = (props)=>{
    const host = "http://localhost:5000";
    const [notes,setNotes] = useState([]);

    // Get all the notes
    const getNotes=async()=>{
        // API CALL
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json);
    }
    // Adding a note
    const addNote = async(title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                title,
                description,
                tag})
        });
        const json = await response.json();
        setNotes(notes.concat(json));
    }

    // Deleting a note
    const deleteNote=async(id)=>{
        await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        getNotes();
    }

    // Edit a note
    const editNote= async(id,title,description,tag)=>{
        // Logic to edit in backend
        await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                title,
                description,
                tag})
        }); 

        // Logic to edit the code in the frontend
        getNotes();
    }
    
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

