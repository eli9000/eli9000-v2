import React, { Component } from 'react';
// import Axios from 'axios';

// const ListItem = ({ name, desc, butn, href, fa }) => (
//   <div className="col-lg-4">
//     <span className="fa-stack fa-5x">
//       <i className="fa fa-circle fa-stack-2x"></i>
//       <i className={fa}></i>
//     </span>
//     <h2>{name}</h2>
//     <p>{desc}</p>
//     <p><a className="btn btn-info" href={href} role="button">{butn}</a></p>
//   </div>
// );


export default class Info extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: [],
  //     loading: true
  //   }
  // }

  // componentDidMount() {

  //   Axios({
  //     method: 'get',
  //     baseURL: 'http://localhost:3030',
  //     url: '/info'
  //   })
  //     .then(({ data }) => {
  //       this.setState({
  //         data,
  //         loading: false
  //       });
  //       console.log({ data });
  //     }).catch((err) => console.log('ERROR:\n', err));

  // }
  render() {
    // const { data } = this.state;
    return (
      <div className="Info">
        <br />
        {/* <h1 className="display-3" style={{ textAlign: 'center' }}>About me:</h1> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <span className="fa-stack fa-5x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-coffee fa-stack-1x fa-inverse"></i>
              </span>
              <h2>Coffee</h2>
              <p>I like coffee</p>
              <p><a className="btn btn-info" href="http://paypal.me/eli9000" role="button">Buy me coffee</a></p>
            </div>
            <div className="col-lg-4">
              <span className="fa-stack fa-5x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-paw fa-stack-1x fa-inverse"></i>
              </span>
              <h2>Dogs</h2>
              <p>I have a dog</p>
              <p><a className="btn btn-info" href="/dog" role="button">See my dog</a></p>
            </div>
            <div className="col-lg-4">
              <span className="fa-stack fa-5x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-users fa-stack-1x fa-inverse"></i>
              </span>
              <h2>Friends</h2>
              <p>I have one</p>
              <p><a className="btn btn-info" href="http://www.facebook.com/eli9000" role="button">Be muh friend</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// {
// data && !!data.length && data.map((row) => (
//   <ListItem {...row} />
// ))
// }