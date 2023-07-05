import React, {useState} from "react";
import PropTypes from "prop-types";
// import {a} from 'react-router-dom';

export default function Navbar(props) {
  const [Status, setStatus] = useState(false)
  const [Status1, setStatus1] = useState(false)
  const [Status2, setStatus2] = useState(false)

  const CallDark = () => {
    if (Status === false)
    {
      setStatus(true)
      setStatus1(false)
      setStatus2(false)
    }
    else
    {
      setStatus(false)
      setStatus1(false)
      setStatus2(false)
    }
  }

  const CallBlue = () => {
    if (Status1 === false)
    {
      setStatus(false)
      setStatus1(true)
      setStatus2(false)
    }
    else
    {
      setStatus(false)
      setStatus1(false)
      setStatus2(false)
    }
  }

  const CallRed = () => {
    if (Status2 === false)
    {
      setStatus(false)
      setStatus1(false)
      setStatus2(true)
    }
    else{
      setStatus(false)
      setStatus1(false)
      setStatus2(false)
    }
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={Status}
          onClick={props.toggle}
          onChange={CallDark}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark Mode
        </label>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-4`}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={Status1}
          onClick={props.blue}
          onChange={CallBlue}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Blue Mode
        </label>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-4`}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={Status2}
          onClick={props.red}
          onChange={CallRed}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Red Mode
        </label>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
