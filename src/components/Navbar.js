import React from 'react'
import PropTypes from 'prop-types' // props concept
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    // JSX
    // Bootstrap
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link> {/*Props*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='dark' ? 'light':'dark'} m-2`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label me-2" htmlFor="flexSwitchCheckDefault">{`${props.mode==='dark' ? 'light':'dark'}`}</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className={`btn btn-outline-${props.mode==='dark' ? 'light':'dark'} type="submit"`}>Search</button>
            {/* success = green, primary = blue */}
          </form>
        </div>
      </div>
    </nav>
  )
}

// Property Types Set
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

// default property set
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
}