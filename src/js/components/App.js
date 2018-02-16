import React, { Component } from 'react';
import '../../css/App.css';
import BikeModels from '../Containers/bike-models';
import Details from '../Containers/Details';
import Bikes from '../Containers/bikes';


// var bgColors = {
//   "Default": "#81b71a",
//   "Blue": "#00B1E1",
//   "Cyan": "#37BC9B",
//   "Green": "#8CC152",
//   "Red": "#E9573F",
//   "Yellow": "#F6BB42",
// };


export default class App extends Component {

  render() {
    return (
      <div>
        {/* <div className="App"  style={{ backgroundColor: bgColors.Default }}> */}
        <div className="App">
          <header>
            <h1 >
              Welcome to My KTM Online Store
          </h1>
          </header>
          <div className="row">
            <div className="col-lg-4">
              {/* <div class="col-lg-4" style={{ backgroundColor: bgColors.Blue }}> */}
              <div className="col-lg-4" >
                <h1>KTM Models</h1>
                {/* <Model /> */}
                <BikeModels />
              </div>
            </div>
            {/* <div class="col-lg-4" style={{ backgroundColor: bgColors.Red }}> */}
            <div className="col-lg-4" >
              <div className="col-lg-4" >
                <Bikes />
              </div>
            </div>
            {/* <div class="col-lg-4" style={{ backgroundColor: bgColors.Yellow }}> */}
            <div className="col-lg-4">
              <div className="col-lg-4" >
                <Details />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default App;
