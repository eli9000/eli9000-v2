import React, { Component } from 'react';

class Jumbo extends Component {
  render() {
    return (
      <div className="Jumbo">
        <div className="container">
          <div className="jumbotron">
            <div className="self-bg">
              <h1 className="display-3">Dude, thanks for coming!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbo;