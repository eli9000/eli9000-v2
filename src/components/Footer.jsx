import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer" style={{padding: '2rem 0', textAlign: 'center'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                <i className="fa fa-copyright fa-spin" /> Copyright 2017 eDot Dev Werx
              </p>
            </div>
            <div className="col-md-6">
              <p>
                LINK | LINK | LINK
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}