'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hotel = require('./hotel');

Object.keys(_hotel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hotel[key];
    }
  });
});