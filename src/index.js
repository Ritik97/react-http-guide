import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

/** Apart from using interceptor, we can also set some global congifuration in other way. */

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.post['Content-Type'] = 'appication/json';


/** Sometimes, we need to execute some code globally, on every req sent and/or response received from anywhere in our app.
 * 'interceptor' is a method of the axios object which executes globally, everytime, on every res sent and/or res received.
 * This could be helpful in setting some auth headers, handling errors globally etc. Since 'index.js' is the most global file 
 * of our app, we will use interceptors in-here.
 */

axios.interceptors.request.use(response => {
    console.log(response)
    //edit response(set some header)
    return response; //return
}, err => {
    console.log(err);
    return Promise.reject(err); //forwarding the error to the component's catch block
});

axios.interceptors.response.use(response => {
    console.log(response)
    return response;
}, err => {
    console.log(err)
    return Promise.reject(err);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
