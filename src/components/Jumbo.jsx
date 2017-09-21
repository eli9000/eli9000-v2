import React, { Component } from 'react';

class Jumbo extends Component {
  render() {
    return (
      <div className="Jumbo">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">Oh, hai.</h1>
            <p className="lead">Not sure exactly the fucking point of this page... fml.</p>
            <hr className="my-4" />
            <p>Some more bullshit to fill this fucking jumbo div that I copy pasted. Ah... bitch.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="/fuckme" role="button">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbo;