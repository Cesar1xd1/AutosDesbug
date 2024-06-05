"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rendervalidV = exports.renderTablaV = exports.renderIndexV = exports.renderEVU = exports.renderEVE = exports.postEditV = exports.insertarVendedor = exports.getEditV = exports.deleteVendedor = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Vendedor = _interopRequireDefault(require("../models/Vendedor"));
var renderIndexV = exports.renderIndexV = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var vendedores;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Vendedor["default"].find().lean();
        case 2:
          vendedores = _context.sent;
          res.render('index', {
            vendedores: vendedores
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderIndexV(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var renderTablaV = exports.renderTablaV = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var vendedores;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _Vendedor["default"].find().lean();
        case 2:
          vendedores = _context2.sent;
          res.render('vendedores', {
            vendedores: vendedores
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function renderTablaV(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var renderEVU = exports.renderEVU = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var vendedores;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _Vendedor["default"].find().lean();
        case 2:
          vendedores = _context3.sent;
          res.render('errorVUni', {
            vendedores: vendedores
          });
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function renderEVU(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var renderEVE = exports.renderEVE = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var vendedores;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _Vendedor["default"].find().lean();
        case 2:
          vendedores = _context4.sent;
          res.render('errorVEmp', {
            vendedores: vendedores
          });
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function renderEVE(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var rendervalidV = exports.rendervalidV = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var vendedores;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _Vendedor["default"].find().lean();
        case 2:
          vendedores = _context5.sent;
          res.render('validVedit', {
            vendedores: vendedores
          });
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function rendervalidV(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//ALTA
var insertarVendedor = exports.insertarVendedor = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var vendedor, vendedoradd;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          vendedor = (0, _Vendedor["default"])(req.body);
          _context6.next = 4;
          return vendedor.save();
        case 4:
          vendedoradd = _context6.sent;
          res.redirect('/vendedores');
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          if (_context6.t0.name == "MongoServerError") {
            res.redirect('/errorVUni');
          } else if (_context6.t0.name == "ValidationError") {
            res.redirect('/errorVEmp');
          }
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function insertarVendedor(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

//BAJAS
var deleteVendedor = exports.deleteVendedor = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.next = 3;
          return _Vendedor["default"].findByIdAndDelete(id);
        case 3:
          res.redirect('/vendedores');
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function deleteVendedor(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

//CAMBIO
var getEditV = exports.getEditV = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var vendedor;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _Vendedor["default"].findById(req.params.id).lean();
        case 3:
          vendedor = _context8.sent;
          res.render('editV', {
            vendedor: vendedor
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
  return function getEditV(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var postEditV = exports.postEditV = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          if (!(req.body.nombre == '' || req.body.correoe == '')) {
            _context9.next = 5;
            break;
          }
          res.redirect('/validVedit');
          _context9.next = 8;
          break;
        case 5:
          _context9.next = 7;
          return _Vendedor["default"].findByIdAndUpdate(id, req.body);
        case 7:
          res.redirect('/vendedores');
        case 8:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function postEditV(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();