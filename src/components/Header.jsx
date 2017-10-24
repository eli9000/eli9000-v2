import React, { Component } from 'react';
import Axios from 'axios';

const ListSocial = ({ href, fa }) => (
  <li className="nav-item">
    <a className="nav-link" href={href}><i className={fa} /></a>
  </li>
);

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {

    Axios({
      method: 'get',
      baseURL: 'http://localhost:3030',
      url: '/social'
    })
      .then(({ data }) => {
        this.setState({
          data,
          loading: false
        });
        console.log({ data });
      }).catch((err) => console.log('ERROR:\n', err));

  }

  render() {
    const { data } = this.state;
    return (
      <div className="Header">
        <div className="container">
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
                    <a className="dropdown-item" href="/resumes/resume.pdf" download><i className="fa fa-file-pdf-o fa-lg" />&nbsp; Download as PDF</a>
                    <a className="dropdown-item" href="/resumes/resume.pdf"><i className="fa fa-file-word-o fa-lg" />&nbsp; Download as Word doc</a>
                    <a className="dropdown-item" href="/slideshow"><i className="fa fa-file-powerpoint-o fa-lg" />&nbsp; View a slideshow</a>
                    <a className="dropdown-item" href="/video"><i className="fa fa-file-video-o fa-lg" />&nbsp; Watch a short video</a>
                  </div>
                </li>
              </ul>
              <ul className="nav ul-icons">
                {data && !!data.length && data.map((row) => (
                  <ListSocial {...row} />
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}