import React from 'react'

<<<<<<< HEAD
const Note = ({ note, setCurrentNoteId }) => {
  return (
    <a onClick={() => setCurrentNoteId(note.id)}>
=======
const Note = ({ note, setCurrentNote }) => {
  return (
    <a onClick={() => setCurrentNote(note)}>
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
      <li>
        <div className="note">
          <div className="note-title">
            {note.title}
          </div>
          <div className="note-body">
            <p>
              {note.body}
            </p>
          </div>
        </div>
      </li>
    </a>
  )
}

<<<<<<< HEAD
export default Note
=======
export default Note
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
