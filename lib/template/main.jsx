/* Import modules */
import React from 'react';
import Router from 'react-router'
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

/* Import routes */
import Routes from './routes.jsx';
import App from './layouts/App.jsx';

const history = createMemoryHistory();

ReactDOM.render( 
    <Router history={ history }>{ Routes }</Router>, 
    document.getElementById('app')
);