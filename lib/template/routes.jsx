/* Import modules */
import React from 'react';
import { Route } from 'react-router';

/* Import layouts */
import App from './layouts/App.jsx';
import Intro from './layouts/Intro.jsx';
import Page from './layouts/Page.jsx';
//import Title from './components/General/Text/Title.jsx';

/* Import data */
import routes from './data/routes.json';

let routesArr = [];
Object.keys(routes.data).forEach(function(key) {
    routesArr.push(routes.data[key]);
});

/* Export module */
export default (
    <Route component={App}>
        <Route path='/' component={Intro} />
        {
            routesArr.map(function(item, i) {
                return (
                    <Route
                        path={'/' + item.route}
                        component={function(props) {
                            return (
                                <Page
                                    page={item.page.article}
                                    title={item.chapter + '. ' + item.title} />
                            );
                        }} />
                );
            })
        }
    </Route>
);