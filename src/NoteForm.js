import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props)

    this.state = {
      note: this.blankNote(),
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const newId = nextProps.currentNoteId
    if (newId !== this.state.note.id) {
      this.setState({ note: nextProps.notes[newId] })
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(this.state.note)
    )
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({ note: this.blankNote() })
  }

  handleRemove = (ev) => {
    this.props.removeNote(this.state.note)
=======
  handleChanges = (ev) => {
    const note = {...this.props.currentNote}
    note[ev.target.name] = ev.target.value
    this.props.saveNote(note)
  }

  handleRemove = (ev) => {
    this.props.removeNote(this.props.currentNote)
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
  }

  render() {
    return (
      <div className="NoteForm">
<<<<<<< HEAD
        <form onSubmit={this.handleSubmit}>
=======
        <form>
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
<<<<<<< HEAD
              value={this.state.note.title}
=======
              value={this.props.currentNote.title}
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
            />
          </p>
          <p>
            <textarea
              name="body"
              placeholder="Just start typing..."
              onChange={this.handleChanges}
<<<<<<< HEAD
              value={this.state.note.body}
            ></textarea>
          </p>
          <button type="submit">
            Save and new
          </button>
          <button onClick={this.handleRemove}>
=======
              value={this.props.currentNote.body}
            ></textarea>
          </p>
          <button
            type="button"
            onClick={this.handleRemove}
          >
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
            <i className="fa fa-trash-o"></i>
          </button>
        </form>
      </div>
    )
  }
}

export default NoteForm
