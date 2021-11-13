import React, { Component } from 'react';
import { Link } from "react-router";

export default class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand offset-sm-1" to="/">
                            News Flow
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
                        <div
                            className="collapse navbar-collapse offset-4"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        Home
                                    </a>
                                </li>

                                <li className="nav-item"><Link className="nav-link" to="/">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Health</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
