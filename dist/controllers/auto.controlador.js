"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rendervalidA = exports.renderTablaA = exports.renderIndex = exports.renderEAU = exports.renderEAE = exports.postEditA = exports.insertarAuto = exports.getEditA = exports.deleteAuto = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Auto = _interopRequireDefault(require("../models/Auto"));
var renderIndex = exports.renderIndex = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var autos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Auto["default"].find().lean();
        case 2:
          autos = _context.sent;
          res.render('index', {
            autos: autos
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderIndex(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var renderEAU = exports.renderEAU = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var autos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _Auto["default"].find().lean();
        case 2:
          autos = _context2.sent;
          res.render('errorAUni', {
            autos: autos
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function renderEAU(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var renderEAE = exports.renderEAE = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var autos;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _Auto["default"].find().lean();
        case 2:
          autos = _context3.sent;
          res.render('errorAEmp', {
            autos: autos
          });
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function renderEAE(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var rendervalidA = exports.rendervalidA = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var autos;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _Auto["default"].find().lean();
        case 2:
          autos = _context4.sent;
          res.render('validAedit', {
            autos: autos
          });
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function rendervalidA(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var renderTablaA = exports.renderTablaA = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var autos;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _Auto["default"].find().lean();
        case 2:
          autos = _context5.sent;
          res.render('tabla', {
            autos: autos
          });
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function renderTablaA(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//ALTA
var insertarAuto = exports.insertarAuto = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var auto, autoadd;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          auto = (0, _Auto["default"])(req.body);
          _context6.next = 4;
          return auto.save();
        case 4:
          autoadd = _context6.sent;
          res.redirect('/tabla');
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          if (_context6.t0.name == "MongoServerError") {
            res.redirect('/errorAUni');
          } else if (_context6.t0.name == "ValidationError") {
            res.redirect('/errorAEmp');
          }
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function insertarAuto(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

//BAJAS
var deleteAuto = exports.deleteAuto = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.next = 3;
          return _Auto["default"].findByIdAndDelete(id);
        case 3:
          res.redirect('/tabla');
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function deleteAuto(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

//CAMBIO
var getEditA = exports.getEditA = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var auto;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _Auto["default"].findById(req.params.id).lean();
        case 3:
          auto = _context8.sent;
          res.render('edit', {
            auto: auto
          });
          _context8.next = 10;
          break;
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0.message);
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function getEditA(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var postEditA = exports.postEditA = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          if (!(req.body.precio == '' || req.body.modelo == '' || req.body.capacidad == '' || req.body.color == '')) {
            _context9.next = 5;
            break;
          }
          res.redirect('/validAedit');
          _context9.next = 8;
          break;
        case 5:
          _context9.next = 7;
          return _Auto["default"].findByIdAndUpdate(id, req.body);
        case 7:
          res.redirect('/tabla');
        case 8:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function postEditA(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();