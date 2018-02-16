import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectModel } from '../actions/index';


class BikeModels extends Component {

    bikemodel() {
            return (
                <ul  className="item">
                    {
                        <div> {this.props.Models.KTM.model.map((type, i) => {
                            return ( 
                            <li onClick={() => this.props.selectModel(type)} key={type.id}> 
                             <span className="badge">{i+1}</span>
                            {type.type}</li>
                            
                            )
                        })} </div>
                    }
                </ul> 
            );
    }
    render() {
        return (
            <div>
                {this.bikemodel()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        Models: state.models
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectModel: selectModel }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(BikeModels);