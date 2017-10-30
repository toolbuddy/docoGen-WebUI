const docoGen_UI = require('../main');

/*var t = docoGen_UI.generate_html('./test.docogen', __dirname + '/dest', function(err, msg) {
    console.log(msg);
});*/

docoGen_UI.generate_html_ex(__dirname, __dirname + '/dest', function(err, msg) {
    console.log(msg);
});

// Export docoGen files
//docoGen_UI.export_docoGen(__dirname, {}, function(err, doc_obj) {
//    console.dir(doc_obj);
//});
