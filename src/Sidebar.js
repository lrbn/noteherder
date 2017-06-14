import React from 'react'

import quill from './quill.svg'
import new_hover from './new-hover.png'
import new_ from './new.png'

import './Sidebar.css'

function addNote(ev) {
  console.log("Added a note.")
    // Find a way add to NoteList
    // Layout of a Note
    // < li >
    //  <div className="note">
    //    <div className="note-title">
    //      Note Title
    //    </div>
    //    <div className="note-body">
    //      <p>
    //        Note Content
    //      </p>
    //    </div>
    //  </div>
    // </li >
}

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder" />
      </div>
      <button className="new-note" onClick={addNote}>
        <img src={new_hover} alt="New note" />
        <img className="outline" src={new_} alt="New note" />
      </button>
    </div>
  )
}

export default Sidebar