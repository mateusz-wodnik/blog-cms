'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _post = require('./routes/post.routes');

var _post2 = _interopRequireDefault(_post);

var _comment = require('./routes/comment.routes');

var _comment2 = _interopRequireDefault(_comment);

var _config = require('./routes/config.routes');

var _config2 = _interopRequireDefault(_config);

require('./mongoConfig.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 5000;

var app = (0, _express2.default)();
var server = _http2.default.Server(app);

// Body parser
app.use(_bodyParser2.default.json());

// Handle two separated static sources for admin and client
app.use(_express2.default.static(__dirname + '/../public'));
app.use(_express2.default.static(__dirname + '/../admin'));
// On "/admin" request send admin html file
app.get('/admin/*', function (req, res) {
	res.sendFile(__dirname + '/../../production/admin/index.html');
});
// Routers

app.use('/api/posts', _post2.default);
app.use('/api/comments', _comment2.default);
app.use('/api/config', _config2.default);

// Database config


server.listen(port, function () {
	console.log('server listens on port: ' + port);
});