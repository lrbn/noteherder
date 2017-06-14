import React from 'react'

import quill from './quill.svg'
import new_hover from './new-hover.png'
import new_ from './new.png'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder" />
      </div>
      <button className="new-note">
        <img src={new_hover} alt="New note" />
        <img className="outline" src={new_} alt="New note" />
      </button>
    </div>
  )
}

export default Sidebar