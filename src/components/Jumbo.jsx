import React, { Component } from 'react';

export default class Jumbo extends Component {
  render() {
    return (
      <div className="Jumbo">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">I cans code 4 u</h1>
            <p className="lead">Skills have I, many. Like you will, yes yes.</p>
            <hr className="my-4" />
            <p>React, SCSS, Node.js, API's, JSON, MongoDB, PostgreSQL, Docker, AWS, Digital Ocean, Github, Sketch and more!</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="/fuckme" role="button">Coding skills >></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
