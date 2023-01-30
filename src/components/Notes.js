import React, {useContext} from 'react'
import NoteContext from'../context/notes/noteContext'
import AddNote from './AddNote';
import NoteItem from './Noteitem';

export default function Notes() {
    const context = useContext(NoteContext);
    const {notes} = context;
  return (
    <>
    <AddNote/>
    <div className="row my-3">
        <h2>Your notes</h2>
        {/* Providing Unique key*/}
        {notes.map((note)=>{
            return <NoteItem key={note._id} note={note}/>
        })}
    </div>
    </>
  )
}
