import React, { Component } from 'react';

const STYLES = {
  width: '100%',
  height: '100%',
};

const HR = {
  margin: '5rem 0'
};

export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="container">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Ugly Sweater ALL DAY!
              </h2>
              <p className="lead">
                Excepteur irure culpa enim voluptate culpa. Sit nisi ullamco incididunt non cillum magna officia sunt esse exercitation tempor velit adipisicing irure. Ut aliquip quis do aliqua enim magna fugiat. Cillum laborum veniam aute irure sint in. Cupidatat nostrud consequat reprehenderit sit ut non et proident laborum. Consequat veniam et veniam ad et id ut ut dolor. Laborum deserunt ea dolore Lorem amet incididunt reprehenderit ad ullamco.
              </p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" alt="500x500" style={STYLES} src="/images/meuglysweater07.jpg" />
            </div>
          </div>
        </div>
        <hr className="content-divider" style={HR} />
        <div className="container">
          <div className="row featurette">
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" alt="500x500" style={STYLES} src="/images/phesantkill.jpg" />
            </div>
            <div className="col-md-7">
              <h2 className="featurette-heading">
                I hunted phesants!
              </h2>
              <p className="lead">
                Excepteur irure culpa enim voluptate culpa. Sit nisi ullamco incididunt non cillum magna officia sunt esse exercitation tempor velit adipisicing irure. Ut aliquip quis do aliqua enim magna fugiat. Cillum laborum veniam aute irure sint in. Cupidatat nostrud consequat reprehenderit sit ut non et proident laborum. Consequat veniam et veniam ad et id ut ut dolor. Laborum deserunt ea dolore Lorem amet incididunt reprehenderit ad ullamco.
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
      
    );
  }
}
