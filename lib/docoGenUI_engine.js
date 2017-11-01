/* Import modules */
const spawn = require('child_process').spawn;
const fsx = require('fs-extra');
const fh = require("filehound");
const path = require('path');
const fs = require('fs');
const os = require('os');
const updateJson = require('update-json-file');
const writeJson = require('write-json'); 

/* Import React modules */
const React = require('react');
const Router = require('react-router');
const ReactDOM = require('react-dom');

/* Import Components */
const App = require('./template/layouts/App.jsx');

/* Create module */
const engine = {};

engine.generate_header = function(title, vers) {
    let json_path = '../lib/template/data/header.json';
    
    updateJson(json_path, function(json_obj) {
        json_obj.data[0].title = title;
        json_obj.data[0].vers = vers;

        return json_obj;
    });
}

engine.generate_author = function(author) {
    let json_path = '../lib/template/data/author.json'

    updateJson(json_path, function(json_obj) {
        json_obj.data = [];

        Object.keys(author).forEach(function(key) {
            json_obj.data.push(author[key]);
        });

        return json_obj;
    });
}

engine.generate_abstract = function(abstract) {
    let json_path = '../lib/template/data/abstract.json';

    updateJson(json_path, function(json_obj) {
        json_obj.data[0].content = [];
        
        Object.keys(abstract).forEach(function(key) {
            json_obj.data.push(abstract[key]);
        });

        return json_obj;
    });
}

engine.generate_reference = function(reference) {
    let json_path = '../lib/template/data/reference.json';

    updateJson(json_path, function(json_obj) {
        json_obj.data = [];

        Object.keys(reference).forEach(function(key) {
            json_obj.data.push(reference[key]);
        });

        return json_obj;
    });
}

engine.generate_routes = function(routes) {
    let route_arr = [], route_item = {};

    for (var i = 0; i < routes.length; ++i) {
        route_arr.push({
            'chapter': i + 1,
            'title': routes[i].title,
            'route': routes[i].title.replace(' ', '_'),
            'page': {
                'article': routes[i].content,
                'reference': routes[i].reference
            }
        });
    }

    let json_path = '../lib/template/data/routes.json';

    updateJson(json_path, function(json_obj) {
        json_obj.data = [];

        Object.keys(route_arr).forEach(function(key) {
            json_obj.data.push(route_arr[key]);
        });

        return json_obj;
    });
}

/* Export module */
module.exports = engine;