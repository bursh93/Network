import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/Store/Redux-store";
import {Provider} from "react-redux";


setInterval(()=>{
    store.dispatch({type:"FAKE"})
}, 1000);



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
 