import React from 'react'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div class="logo">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/quill.svg" alt="Noteherder" />
      </div>
      <button class="new-note">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new-hover.png" alt="New note" />
        <img class="outline" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new.png" alt="New note" />
      </button>
    </div>
  )
}

export default Sidebar