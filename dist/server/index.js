'use strict';

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = new _debug2.default('almundo:root');

_app2.default.listen(_config.port, function () {
  debug('Server running at port ' + _config.port);
});