const docoGen_UI = require('../main');

docoGen_UI.generate_html_ex(__dirname + '/script', __dirname + '/dest', function(err, msg) {
    console.log(msg);
});

// Export docoGen files
//docoGen_UI.export_docoGen(__dirname, {}, function(err, doc_obj) {
//    console.dir(doc_obj);
//});