import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* <nav className={`navbar navbar-expand-lg navbar-light bg-light`}> */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <button type="button" onClick={props.greenClick} class="btn btn-success mx-2"></button>
            <button type="button" onClick={props.redClick} class="btn btn-danger mx-2"></button>
            <button type="button" onClick={props.yellowClick} class="btn btn-warning mx-2"></button>
            <div className={`form-check form-switch text-${props.mode === "light" ? "black" : "light" }`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.modeChange} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title : "Title",
    about : "About"
}