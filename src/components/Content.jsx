import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="container-fluid">
          <div class="row justify-content-md-center">
            <div class="col col-lg-2">
              1 of 3</div>
            <div class="col-12 col-md-auto">
              Variable width content</div>
            <div class="col col-lg-2">
              3 of 3</div>
          </div>
          <div class="row">
            <div class="col">
              1 of 3</div>
            <div class="col-12 col-md-auto">
              Variable width content</div>
            <div class="col col-lg-2">
              3 of 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;