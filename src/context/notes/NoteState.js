import NoteContext from './noteContext';
import {useState} from 'react';

const NoteState = (props)=>{
    const notesInitial = [
        {
            "_id": "61322f195153781a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title1",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
          },
          {
            "_id": "61322f195531781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title2",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e081",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title3",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e082",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title4",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f195537812a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title5",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "613222f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title6",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f119553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title7",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
    ]
    const [notes,setNotes] = useState(notesInitial);

    // Adding a note
    const addNote = (title,description,tag)=>{
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
    const editNote=()=>{

    }
    
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

