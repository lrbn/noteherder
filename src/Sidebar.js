import React from 'react'

import quill from './quill.svg'
<<<<<<< HEAD
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
=======
import newHover from './new-hover.png'
import newIcon from './new.png'
import './Sidebar.css'
import SignOut from './SignOut'

const Sidebar = ({ resetCurrentNote, signOut }) => {
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder" />
      </div>
<<<<<<< HEAD
      <button className="new-note" onClick={addNote}>
        <img src={new_hover} alt="New note" />
        <img className="outline" src={new_} alt="New note" />
      </button>
=======
      <button
        className="new-note"
        onClick={resetCurrentNote}
      >
        <img src={newHover} alt="New note" />
        <img className="outline" src={newIcon} alt="New note" />
      </button>
      <SignOut signOut={signOut} />
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
    </div>
  )
}

<<<<<<< HEAD
export default Sidebar
=======
export default Sidebar
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
