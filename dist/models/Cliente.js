"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var clienteSch = new _mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  correoe: {
    type: String,
    required: true
  }
});
var _default = exports["default"] = (0, _mongoose.model)('cliente', clienteSch);