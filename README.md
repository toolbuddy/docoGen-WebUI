# docoGen WebUI

[![npm version](https://badge.fury.io/js/docogen-webui.svg)](https://badge.fury.io/js/docogen-webui.svg)
[![npm downloads](https://img.shields.io/npm/dm/docogen-webui.svg)](https://img.shields.io/npm/dm/docogen-webui.svg)
[![](https://data.jsdelivr.com/v1/package/npm/docogen/badge)](https://www.jsdelivr.com/package/npm/docogen-webui)

**docoGen** is a document generation tool within your masterpiece.

## Introduction

**docoGen WebUI** is supported from docoGen package which can generate web page to demostrate the document. docoGen WebUI is based on Sementic UI React currently. In future, we will support more web UI library and become more flexible to use.

> *docoGen Project* is an open source project for more convenient and widely used in document generation. If you are interest in this project or repository, please contect with us and feel free to ask us any question. We are very welcome you to join our group.

## Prerequisite

* Dependencies of `gulp`.
* Using the file extension which named `.docogen`, and just store JSON format in it.
    * These files treated as configuration dependency to your generated result.
    * More information (Still working on it, see `./test/script/` to see current support)
* Within *docoGen-WebUI* running, the terminal will output some message about *Gulp* tasks.
    ```bash
    Have 8 files.
    [17:46:32]
    Working directory changed to ~/Project/docoGen-html-ui

    [17:46:32]
    Working directory changed to ~/Project/docoGen-html-ui

    [17:46:34]
    Using gulpfile ~/Project/docoGen-html-ui/gulpfile.js

    [17:46:34]
    Using gulpfile ~/Project/docoGen-html-ui/gulpfile.js

    [17:46:34]
    Starting 'themes'...

    [17:46:34]
    Starting 'styles'...

    [17:46:34]
    Starting 'vendor'...

    [17:46:34]
    Starting 'setup'...

    [17:46:34]
    Starting 'browserify-vendor'...

    [17:46:34]
    Starting 'i18n'...

    [17:46:34]
    Finished 'setup' after 20 ms

    [17:46:34]
    Finished 'themes' after 66 ms

    [17:46:34]
    Starting 'initial'...

    [17:46:34]
    Finished 'initial' after 35 μs

    Gulp - Initialize completed

    [17:46:35]
    Finished 'i18n' after 1.46 s

    [17:46:35]
    Finished 'styles' after 1.53 s

    [17:46:35] Finished 'vendor' after 1.64 s

    [17:46:37]
    Finished 'browserify-vendor' after 3.24 s

    [17:46:37]
    Starting 'browserify'...

    [17:46:45]
    Finished 'browserify' after 8.29 s

    [17:46:45]
    Starting 'build'...

    [17:46:45]
    Finished 'build' after 3.8 μs

    Gulp - Build completed
    ```

## Usage

### Installation

* Clone from GitHub.
    ```bash
    $ git clone https://github.com/toolbuddy/docoGen-WebUI
    ```
* Install from npm.
    ```bash
    $ npm install docogen-webui --save
    ```
### Execution

* Import the module in your code.
    ```javascript
    const docogen_web = require('docogen-webui');
    ```
* Function
    * `src_path`: the source path to your project root, and it will get all docoGen files (`.docogen`).
    * `dst_path`: the destination directory to store those generated web page.
    ```javascript
    // Convert docogen to web page (HTML format), with absolute path
    docogen_web.generate_html_ex(src_path, dst_path, function(err, msg) {
        console.log(msg);
    });
    ```

## Wiki

* Contain the latest support and usage explanation.
* Also the IDE support documentation!

## Author

* [Yung-Sheng Lu](http://www.github.com/yungshenglu)

---

Copyright © 2017 ToolBuddy