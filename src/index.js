import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';

import MovieDetail from './pages/MovieDetail'
import PopularMoviesList from './pages/PopularMoviesList'
import { reducer } from "./reducer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const middlewares = [thunk];
const store = createStore(reducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={PopularMoviesList} />
      <Route path="/movie/:id" component={MovieDetail} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
