const docoGen_UI = require('../main');

docoGen_UI.generate_html_ex(__dirname + '/script', __dirname + '/dest', function(err, msg) {
    console.log(msg);
});