import React, {useContext} from 'react'
import NoteContext from'../context/notes/noteContext'
import NoteItem from './Noteitem';

export default function Notes() {
    const context = useContext(NoteContext);
    const {notes} = context;
  return (
    <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note)=>{
            return <NoteItem note={note}/>
        })}
    </div>
  )
}
