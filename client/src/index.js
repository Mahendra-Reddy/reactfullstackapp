import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import Axios from 'axios';
window.axios = Axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root'));


    // var survey={
    //     title:'my title',
    //     subject:'Give Us Feedback!',
    //     recipients:'p.v.srinivasbabu@gmail.com,mani.reddy557@gmail.com',
    //     body:'We would love to hear if you enjoyed our services!'
    // }