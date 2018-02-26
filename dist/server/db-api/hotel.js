'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hotelsFile = './server/data/data.json';

var hotel = {
  findAll: function findAll() {
    var rawdata = _fs2.default.readFileSync(hotelsFile);
    return JSON.parse(rawdata);
  },
  findById: function findById(idHotel) {
    return hotel.findAll().find(function (_ref) {
      var id = _ref.id;
      return id == idHotel;
    });
  }
};
exports.default = hotel;