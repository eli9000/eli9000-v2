import React, { Component } from 'react';
import Axios from 'axios';

const ListItem = ({ name, desc, butn, href, fa }) => (
  <div className="col-lg-4">
    <span className="fa-stack fa-5x">
      <i className="fa fa-circle fa-stack-2x"></i>
      <i className={fa}></i>
    </span>
    <h2>{name}</h2>
    <p>{desc}</p>
    <p><a className="btn btn-info" href={href} role="button">{butn}</a></p>
  </div>
);


class Info extends Component {
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
      url: '/info'
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
      <div className="Info">
        <div className="container">
            <div className="row">
          {data && !!data.length && data.map((row) => (
              <ListItem {...row} />
          ))}
            </div>
          <hr className="content-divider" />
        </div>
      </div>
    );
  }
}

export default Info;