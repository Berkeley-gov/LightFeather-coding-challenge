import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Navbar class component renders in a user friendly navigation bar that has access to all other components
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid text-center">
                    <Link to="/" className="navbar-brand">LightFeather.io</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label=" Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users/add" className="nav-link active" tabIndex="-1"
                                      aria-disabled="true">Create Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link active" tabIndex="-1"
                                      aria-disabled="true">Login</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}