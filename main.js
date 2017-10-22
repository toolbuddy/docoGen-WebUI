/* Babel ES6/JSX compiler */
require('babel-register');

/* Node modules */
const async = require('async');
const bodyParser = require('body-parser');
const docogen = require('docogen');
const spawn = require('child_process').spawn;
const filehound = require("filehound");
const fs = require('fs');
const fsx = require('fs-extra');
const os = require('os');
const path = require('path');
const randomstring = require('randomstring');

/* docoGen engine */
const engine = require('./lib/docoGenUI_engine');

/* Create modules */
const docoGen_UI = {};

docoGen_UI.generate_html = function(src_path, dst_path, callbacks) {
    // Read docogen file
    fs.readFile(src_path, function(err, data) {  
        if (err) throw err;
        
        let json_obj = JSON.parse(data);
        
        // Generate routes
        engine.generate_routes(json_obj.article);

        // Generate components
        engine.generate_header(json_obj.title, json_obj.version);
        engine.generate_author(json_obj.author);
        engine.generate_abstract(json_obj.abstract.content);
        engine.generate_reference(json_obj.reference);
    });
    
    // Build HTML file
    docoGen_UI.build_html(dst_path);
}

docoGen_UI.build_html = function(dst_path) {
     /* Gulp task - Initialize */
     let inital = spawn('gulp', ['-p', dst_path, '--gulpfile', '../gulpfile.js', 'initial']);
     inital.stdout.on('data', function(data) {
         console.log(data.toString());
     });
 
     inital.stderr.on('data', function(data) {
         console.log(data.toString());
     });
 
     inital.on('exit', function(code) {
         console.log('Gulp - Initialize completed');
     });
 
     /* Gulp task - Build */
     let build = spawn('gulp', ['-p', dst_path, '--gulpfile', '../gulpfile.js', 'build']);
     build.stdout.on('data', function(data) {
         console.log(data.toString());
     });
 
     build.stderr.on('data', function(data) {
         console.log(data.toString());
     });
 
     build.on('exit', function(code) {
         console.log('Gulp - Build completed');
     });
}

docoGen_UI.merge_docoGen = function(src_arr, options) {
    let json_obj = {};
    console.log('Have ' + src_arr.length + ' files.');

    let opt = options || false;
    if (opt.detail) {
        console.dir(src_arr);
    }

    for (var index in src_arr) {
        var tmp = JSON.parse(fs.readFileSync(src_arr[index], 'utf-8'));

        if (tmp.title != undefined && json_obj.title == undefined) {
            json_obj.title = tmp.title;
        }

        if (tmp.options != undefined && json_obj.options == undefined) {
            json_obj.options = tmp.options;
        }

        if (tmp.author != undefined && json_obj.author == undefined) {
            json_obj.author = tmp.author;
        }

        if (tmp.abstract != undefined && json_obj.abstract == undefined) {
            json_obj.abstract = tmp.abstract;
        }

        if (tmp.article != undefined && json_obj.article == undefined) {
            // Set article
        } else if (tmp.article != undefined && json_obj.article.length > 1) {
            json_obj.article = json_obj.article.concat(tmp.article);
            json_obj.article.sort(function(a, b) {
                return (a.priority - b.priority);
            });
        }

        if (tmp.reference != undefined) {
            if (json_obj.reference == undefined) {
                json_obj.reference = tmp.reference;
            } else {
                json_obj.reference = json_obj.reference.concat(tmp.reference);
            }
        }
    }

    return json_obj;
}

docoGen_UI.export_docoGen = function(src_path, options, callbacks) {
    const files = filehound
        .create()
        .paths(src_path)
        .ext('docogen')
        .find(function(err, files) {
            if (err) {
                callbacks(1, 'error');
            } else {
                for (var index in files) {
                    if (files[index].indexOf('node_modules') != -1) {
                        files.splice(index, 1);
                    }
                }

                callbacks(0, docoGen_UI.merge_docoGen(files));
            }
        });
}

module.exports = docoGen_UI;