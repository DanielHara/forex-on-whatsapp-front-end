import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import './index.css';
import InsertClientPage from './InsertClientPage';
import CurrentPriceForm from './containers/CurrentPriceForm';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

var dotenv = require('dotenv');
dotenv.load();


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/insertuser" component={InsertClientPage} />
        <Route path="/currentprice" component={CurrentPriceForm} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
