const docogen = require('docogen');
const docoGen_UI = require('../main');

docoGen_UI.generate_html_ex(__dirname + '/script', __dirname + '/dest', function(err, msg) {
    console.log(msg);
});

docogen.generate_latexpdf(__dirname, __dirname + "/dest", { output: "docogen-latex" }, (err, msg) => {
    console.log(msg);
});