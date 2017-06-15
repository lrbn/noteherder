import React from 'react'

import NoteList from './NoteList'
import Sidebar from './Sidebar'
import NoteForm from './NoteForm'
import './Main.css'

const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar />
      <NoteList notes={props.notes}/>
      <NoteForm saveNote={props.saveNote}/>
    </div>
  )
}

export default Main