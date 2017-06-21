import React from 'react'
<<<<<<< HEAD

import NoteList from './NoteList'
import Sidebar from './Sidebar'
import NoteForm from './NoteForm'
import './Main.css'
=======
import { Route, Switch } from 'react-router-dom'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22

const Main = (props) => {
  return (
    <div className="Main">
<<<<<<< HEAD
      <Sidebar />
      <NoteList notes={props.notes} setCurrentNoteId={props.setCurrentNoteId}/>
      <NoteForm {...props}/>
=======
      <Sidebar
        resetCurrentNote={props.resetCurrentNote}
        signOut={props.signOut}
      />
      <NoteList
        notes={props.notes}
        setCurrentNote={props.setCurrentNote}
      />
      <Switch>
        <Route path="/notes/:id" render={(navProps) => (
          <NoteForm {...props} {...navProps} />
        )} />
        <Route render={(navProps) => (
          <NoteForm {...props} {...navProps} />
        )} />
      </Switch>
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
    </div>
  )
}

<<<<<<< HEAD
export default Main
=======
export default Main
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
