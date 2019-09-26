import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer } from "./reducer";
import App from './components/App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PopularMoviesList from './components/PopularMoviesList'
import MovieDetail from './components/MovieDetail'
// import './index.css';

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
