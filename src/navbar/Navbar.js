import './Navbar.css';
import React from "react";
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg  ftco-navbar-light">
            <div className="container-xl">
            <a className="navbar-brand align-items-center" href="index-2.html">
            <span className="">Oakberry <small>Real Estate Agency</small></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="index-2.html">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
            <li className="nav-item"><a className="nav-link" href="properties.html">Properties</a></li>
            <li className="nav-item"><a className="nav-link" href="agents.html">Agents</a></li>
            <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
            </ul>
            <p className="mb-0"><a href="#" className="btn btn-primary rounded">Submit A Property</a></p>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;