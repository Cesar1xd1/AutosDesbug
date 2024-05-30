"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var autoSch = new _mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  precio: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  anio: {
    type: String,
    required: true
  },
  cilindros: {
    type: String,
    required: true
  },
  puertas: {
    type: String,
    required: true
  },
  capacidad: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});
var _default = exports["default"] = (0, _mongoose.model)('auto', autoSch);