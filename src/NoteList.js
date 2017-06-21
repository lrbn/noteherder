import React from 'react'

import './NoteList.css'
import Note from './Note'

<<<<<<< HEAD
                  // destructuring
const NoteList = ({ notes, setCurrentNoteId}) => {
=======
const NoteList = ({ notes, setCurrentNote }) => {
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        { Object.keys(notes).map((noteId) => {
<<<<<<< HEAD
          return <Note note={notes[noteId]} key={noteId} setCurrentNoteId={setCurrentNoteId}/>
        })}
=======
          return <Note
                   note={notes[noteId]}
                   key={noteId}
                   setCurrentNote={setCurrentNote}
                 />
        }) }
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
      </ul>
    </div>
  )
}

<<<<<<< HEAD
export default NoteList
=======
export default NoteList
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
