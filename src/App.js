import React, { Component } from 'react'
<<<<<<< HEAD
=======
import { Route, Switch, Redirect } from 'react-router-dom'
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22

import './App.css'
import Main from './Main'
import SignIn from './SignIn'
<<<<<<< HEAD
import SignOut from './SignOut'
import base, { auth } from './base'

import { Switch, Route, NavLink } from 'react-router-dom'

=======
import base, { auth } from './base'

>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      uid: null,
<<<<<<< HEAD
      currentNoteId: null,
=======
      currentNote: this.blankNote(),
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
<<<<<<< HEAD
          // finished signing in
          this.authHandler(user)
        } else {
          // finished signing out
          this.setState({ uid: null })
=======
          this.authHandler(user)
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
        }
      }
    )
  }

  syncNotes = () => {
    this.ref = base.syncState(
<<<<<<< HEAD
      `${this.state.uid}/notes`,
=======
      `notes/${this.state.uid}`,
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
      {
        context: this,
        state: 'notes',
      }
    )
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
<<<<<<< HEAD
      this.setCurrentNoteId(note.id)
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
=======
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes, currentNote: note })
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
  }

  removeNote = (note) => {
    const notes = {...this.state.notes}
    notes[note.id] = null
<<<<<<< HEAD
    this.setState({ notes })
=======
    this.setState(
      { notes },
      this.resetCurrentNote()
    )
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
  }

  signedIn = () => {
    return this.state.uid
  }

<<<<<<< HEAD
  authHandler = (user) => {
    this.setState(
      { uid: user.uid },
=======
  authHandler = (userData) => {
    this.setState(
      { uid: userData.uid },
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
      this.syncNotes
    )
  }

  signOut = () => {
    auth
      .signOut()
      .then(
        () => {
<<<<<<< HEAD
          // stop syncing with Firebase
          base.removeBinding(this.ref)
          this.setState({ notes: {} })
=======
          base.removeBinding(this.ref)
          this.resetCurrentNote()
          this.setState({ uid: null, notes: {} })
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
        }
      )
  }

<<<<<<< HEAD
  setCurrentNoteId = (noteId) => {
    this.setState({ currentNoteId: noteId })
  }

  renderMain = () => {
    const actions = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      setCurrentNoteId: this.setCurrentNoteId,
    }
    const noteData = {
      notes: this.state.notes,
      currentNoteId: this.state.currentNoteId,
    }

    return (
      <div>
        <SignOut signOut={this.signOut} />
        <Main
          {...noteData}
          {...actions}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {/*{ this.signedIn() ? this.renderMain() : <SignIn /> }*/}
      </div>
    )
  }
}

export default App;
=======
  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  render() {
    const noteData = {
      notes: this.state.notes,
      currentNote: this.state.currentNote,
    }
    const actions = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      signOut: this.signOut,
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/notes" render={() => (
            <Main
              {...noteData}
              {...actions}
            />
          )} />
          <Route path="/sign-in" component={SignIn} />
          <Route render={() => <Redirect to="/notes" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
