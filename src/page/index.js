import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from '$router';
import HomePage from './home';
import yoHistory from '../common/history';

const List = require.async('./list');
const Detail = require.async('./detail');
const My = require.async('./my');
const Pro = require.async('./pro');

const Root = () => (
    
    <Router history={yoHistory}>
        <Route path="/">
            <IndexRoute component={HomePage}/>
            <Route path="list" getComponent={List} />
            <Route path="detail" getComponent={Detail}/>
            <Route path="my" getComponent={My}/>
            <Route path="pro" getComponent={Pro}/>
        </Route>

    </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
