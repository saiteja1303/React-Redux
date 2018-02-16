import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        if (!this.props.bikemodels) {
            return (
                <div>
                    <h1>Bike details</h1>
                </div>
            )
        
        }
        if (!this.props.bike) {
            return (
                <div>
                    <h1>Bike details</h1>
                </div>
            )
        }
        return (
            <div>
                <h1>Bike details</h1>
                <ul className='item'>
                 
                    <li><span className='badge'>Type:  </span>{this.props.bike.type}</li>
                    <li><span className='badge'>Price  </span>{this.props.bike.details.price}</li>
                    <li><span className='badge'>Engine  </span>{this.props.bike.details.cc}</li>
                    <li><span className='badge'>Power  </span>{this.props.bike.details.power}</li>
                </ul>
                <div>
                    <img alt="Images" src={this.props.bike.details.img} />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        bike: state.activebike,
        bikemodels: state.activeModel
    };
}
export default connect(mapStateToProps)(Details); 