"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./db");
_app["default"].listen(3000);
console.log("server en puerto", 3000);