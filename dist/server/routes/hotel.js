'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middleware = require('../middleware');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _express2.default.Router();

app.get('/', _middleware.hotelsMiddleware, function (req, res) {
  try {
    res.status(200).json(req.hotels);
  } catch (error) {
    (0, _utils.handleError)(error);
  }
});

app.get('/names', _middleware.hotelFindNameMiddleware, function (req, res) {
  try {
    res.status(200).json(req.hotels);
  } catch (error) {
    (0, _utils.handleError)(error);
  }
});

app.get('/names/:name', _middleware.hotelFindNameMiddleware, function (req, res) {
  try {
    res.status(200).json(req.hotels);
  } catch (error) {
    (0, _utils.handleError)(error);
  }
});

app.get('/:id', _middleware.hotelMiddleware, function (req, res) {
  try {
    res.status(200).json(req.hotel);
  } catch (error) {
    (0, _utils.handleError)(error);
  }
});

app.post('/filter', _middleware.hotelFilterMiddleware, function (req, res) {
  try {
    res.status(200).json(req.hotels);
  } catch (error) {
    (0, _utils.handleError)(error);
  }
});

exports.default = app;