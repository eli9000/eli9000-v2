import React, { Component } from 'react';

export default class Jumbo extends Component {
  render() {
    return (
      <div className="Jumbo">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">Coming Soon!</h1>
            <p className="lead">Front-end: React with Redux.<br />
              Back-end: Serverless AWS with GraphQL.</p>
            <hr className="my-4" />
            <p>This landing page was put together using React and Bootstrap v4. Hosted by AWS S3 & Route 53.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="mailto:eli9000@gmail.com" role="button">Contact Me!</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
