import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {allReducers} from './js/reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
