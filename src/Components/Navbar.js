import React from 'react'
import PropTypes from 'prop-types'
import {
    Link, 
    Route,
    Routes,
    BrowserRouter as Router 
} from "react-router-dom";

export default function Navbar(props) {
    
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
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
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    to="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/about">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">
                                    Disabled
                                </Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            {/* <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form> */} 
                        <div className={`form-check form-switch text-${props.mode==='dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode ==='light'? "enable dark mode" : "enable light mode"}</label>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

Navbar.propTypes ={
    title: PropTypes.string
}
Navbar.defaultProps ={
    title: 'Title_here'
}