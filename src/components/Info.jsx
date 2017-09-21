import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <span className="fa-stack fa-5x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-coffee fa-stack-1x fa-inverse"></i>
              </span>
              <h2>Coffee</h2>
              <p>I like coffee.</p>
              <p><a className="btn btn-secondary" href="ish" role="button">Buy me coffee</a></p>
            </div>
            <div className="col-lg-4">
              <span className="fa-stack fa-5x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-paw fa-stack-1x fa-inverse"></i>
              </span>
              <h2>Dogs</h2>
              <p>I have a dog.</p>
              <p><a className="btn btn-secondary" href="ish" role="button">See my dog</a></p>
            </div>
            <div className="col-lg-4">
              <span className="fa-stack fa-5x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-users fa-stack-1x fa-inverse"></i>
              </span>
              <h2>Friends</h2>
              <p>I have none.</p>
              <p><a className="btn btn-secondary" href="ish" role="button">Be my friend</a></p>
            </div>
          </div>
          <hr className="content-divider" />
        </div>
      </div>
    );
  }
}

export default Info;