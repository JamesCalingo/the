import React from 'react'

function Nav() {
  return(
<nav className="navbar navbar-expand-lg mb-3">
  <a className="logo logo-nav mr-5" href="/">The Encouragement Network</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/messages">View messages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Write Message</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">I need encouragement!</a>
      </li> */}
    </ul>
  
  </div>
</nav>
  )
}

export default Nav

