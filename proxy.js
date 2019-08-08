var cors_proxy = require('cors-anywhere');

// Listen on a specific IP Address
// 0.0.0.0 equals localhost
var host = '0.0.0.0';

// Listen on a specific port, adjust if necessary
var port = 8082;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});