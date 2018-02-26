'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotelFilterMiddleware = exports.hotelFindNameMiddleware = exports.hotelMiddleware = exports.hotelsMiddleware = undefined;

var _index = require('../db-api/index');

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = new _debug2.default('almundo:midleware:hotel');

var hotelsMiddleware = exports.hotelsMiddleware = function hotelsMiddleware(req, res, next) {
  req.hotels = _index.hotel.findAll();
  next();
};

var hotelMiddleware = exports.hotelMiddleware = function hotelMiddleware(req, res, next) {
  req.hotel = _index.hotel.findById(req.params.id);
  next();
};

var hotelFindNameMiddleware = exports.hotelFindNameMiddleware = function hotelFindNameMiddleware(req, res, next) {
  var hotels = _index.hotel.findAll();
  var nameHotels = hotels.map(function (hotel) {
    return hotel.name;
  });
  if (req.params.name) {
    var cadena = req.params.name;
    req.hotels = nameHotels.filter(function (name) {
      return name.toUpperCase().includes(cadena.toUpperCase());
    });
  } else {
    req.hotels = nameHotels;
  }
  next();
};

var hotelFilterMiddleware = exports.hotelFilterMiddleware = function hotelFilterMiddleware(req, res, next) {
  var hotels = _index.hotel.findAll();
  var _req$body = req.body,
      name = _req$body.name,
      stars = _req$body.stars;

  if (name) {
    hotels = hotels.filter(function (hotel) {
      return hotel.name.toUpperCase().includes(name.toUpperCase());
    });
  }
  if (stars && stars.length > 0) {
    var myHotels = [];
    stars.forEach(function (star) {
      myHotels.push(hotels.filter(function (hotel) {
        return +hotel.stars === +star;
      }));
    });
    hotels = [];
    myHotels.forEach(function (starHotels) {
      hotels = hotels.concat(starHotels);
    });
  }
  req.hotels = hotels;
  next();
};