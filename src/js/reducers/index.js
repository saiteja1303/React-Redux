import {combineReducers} from 'redux';
import BikeReducer from './Bikes';
import ModelSelect from './model';
import BikeSelect from './bike_actions';

export const allReducers = combineReducers({
    models: BikeReducer,
    activeModel: ModelSelect,
    activebike: BikeSelect
});