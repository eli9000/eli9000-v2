import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand mb-0" href="#">ELI JOHNSON</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">ABOUT ME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">PROJECTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACTS</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    MY RESUME</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#"><i className="fa fa-file-pdf-o fa-lg" /> &nbsp;Download as PDF</a>
                    <a className="dropdown-item" href="#"><i className="fa fa-file-word-o fa-lg" /> &nbsp;Download as Word doc</a>
                    <a className="dropdown-item" href="#"><i className="fa fa-file-code-o fa-lg" /> &nbsp;Download as JSON file</a>
                    <a className="dropdown-item" href="#"><i className="fa fa-file-powerpoint-o fa-lg" /> &nbsp;Or view the slideshow on site</a>
                    <a className="dropdown-item" href="#"><i className="fa fa-file-video-o fa-lg" /> &nbsp;Or watch a short movie I made.</a>
                  </div>
                </li>
              </ul>
              <ul className="nav ul-icons">
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-facebook fa-lg" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-twitter fa-lg" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-linkedin fa-lg" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-github fa-lg" /></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;