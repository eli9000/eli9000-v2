import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container fixed-top">
          <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand mb-0" href="http://eli9000.com">ELI JOHNSON</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacts">Contact</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://eli9000.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Resume</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/resumes/resume.pdf"><i className="fa fa-file-pdf-o fa-lg" />&nbsp; Download as PDF</a>
                    <a className="dropdown-item" href="/resumes/resume.pdf"><i className="fa fa-file-word-o fa-lg" />&nbsp; Download as Word doc</a>
                    <a className="dropdown-item" href="/resumes/resume.pdf"><i className="fa fa-file-code-o fa-lg" />&nbsp; Download as JSON file</a>
                    <a className="dropdown-item" href="/slideshow"><i className="fa fa-file-powerpoint-o fa-lg" />&nbsp; View a slideshow</a>
                    <a className="dropdown-item" href="/video"><i className="fa fa-file-video-o fa-lg" />&nbsp; Watch a short video</a>
                  </div>
                </li>
              </ul>
              <ul className="nav ul-icons">
                <li className="nav-item">
                  <a className="nav-link" href="http://www.facebook.com/eli9000"><i className="fa fa-facebook fa-lg" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://www.twitter.com/_eli9000"><i className="fa fa-twitter fa-lg" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://www.instagram.com/eli9000"><i className="fa fa-instagram fa-lg" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://www.linkedin.com/in/eli9000"><i className="fa fa-linkedin fa-lg" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://www.github.com/eli9000"><i className="fa fa-github fa-lg" /></a>
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