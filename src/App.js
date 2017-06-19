import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import base from './base'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: {},
    }
  }
  componentWillMount() {
    base.syncState(
      'notes',
      {
        context: this,
        state: 'notes',
      }
    )
  }
  // method: show note
  // method: call delete
  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    // this.setState( {notes: notes} )
    this.setState( { notes })
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} saveNote={this.saveNote}/>
      </div>
    );
  }
}

export default App;
