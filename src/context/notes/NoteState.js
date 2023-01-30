import NoteContext from './noteContext';
import {useState} from 'react';

const NoteState = (props)=>{
    const host = "http://localhost:5000";
    // const notesInitial = [
    //     {
    //         "_id": "61322f19553781cjnvcaipi8ca8d0e06",
    //         "user": "6131dc5e3e4037cd4734a066",
    //         "title": "title",
    //         "description": "description",
    //         "tag": "tag",
    //         "date": "2021-09-03T14:20:09.509Z",
    //         "__v": 0
    //     }
    // ]
    const [notes,setNotes] = useState([]);

    // Get all the notes
    const getNotes=async()=>{
        // API CALL
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkN2UxZjM4MzIxNzRlM2U5YThmODM1In0sImlhdCI6MTY3NTA5MjQ2N30.c6eAUkP4Tzy-BMvHJXo9tL_hwW73TDGed8xuEaYYy50"
            }
        });
        const json = await response.json();
        setNotes(json);
    }
    // Adding a note
    const addNote = async(title,description,tag)=>{
        await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkN2UxZjM4MzIxNzRlM2U5YThmODM1In0sImlhdCI6MTY3NTA5MjQ2N30.c6eAUkP4Tzy-BMvHJXo9tL_hwW73TDGed8xuEaYYy50"
            },
            body: JSON.stringify({
                title,
                description,
                tag})
        });
        const note = {
            "_id": "61322f19553781cjnvcaipi8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Deleting a note
    const deleteNote=(id)=>{
        const newNotes = notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);
    }

    // Edit a note
    const editNote= async(id,title,description,tag)=>{
        // Logic to edit in backend
        await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkN2UxZjM4MzIxNzRlM2U5YThmODM1In0sImlhdCI6MTY3NTA5MjQ2N30.c6eAUkP4Tzy-BMvHJXo9tL_hwW73TDGed8xuEaYYy50"
            },
            body: JSON.stringify({
                title,
                description,
                tag})
        }); 

        // Logic to edit the code in the frontend

        for(let ind=0;ind<notes.length;ind++)
        {
            let note = notes[ind];
            if(note._id===id){
                note.title=title;
                note.description=description;
                note.tag=tag;
            }
        }
    }
    
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

