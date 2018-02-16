import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBike } from '../actions/index';

class Bikes extends Component {
    render() {
        if (!this.props.bikes) {
            return (
            <div>
            <h1>Different Bikes</h1>
            <h3> Select any Model</h3>
            </div>);
        }
        if (this.props.bikes.duke)
            return (
                <div>
                 <h1>Different Bikes</h1>   
                <ul className="item">
                    <div>
                        {this.props.bikes.duke.map((bike, i) => {
                            return (
                                <li onClick={() => this.props.selectBike(bike)} key={i}>
                                 <span className="badge">{i + 1}</span>
                                {bike.name}</li>
                            )
                        })}
                    </div>
                </ul>
                </div>
            )
        if (this.props.bikes.supersport)
            return (
                <div>
                <h1>Different Bikes</h1> 
                <ul className="item">
                    <div>
                        {this.props.bikes.supersport.map((bike, i) => {
                            return (
                                <li onClick={() => this.props.selectBike(bike)} key={i}>
                                <span className="badge">{i + 1}</span>
                                {bike.name}</li>
                            )
                        })}
                    </div>
                </ul>
                </div>
            )
        if (this.props.bikes.sportsracer)
            return (
                <div>
                 <h1>Different Bikes</h1> 
                <ul className="item">
                    <div>
                        {this.props.bikes.sportsracer.map((bike, i) => {
                            return (
                                <li onClick={() => this.props.selectBike(bike)} key={i}>
                                  <span className="badge">{i + 1}</span> 
                                {bike.name} </li>
                              
                            )
                        })}
                    </div>
                </ul>
                </div>
            )
    }
}
function mapStateToProps(state) {
    return {
        bikes: state.activeModel
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectBike: selectBike }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Bikes);