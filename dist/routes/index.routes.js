"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auto = require("../controllers/auto.controlador");
var router = (0, _express.Router)();
//Index
router.get('/', _auto.renderIndex);
router.get('/tabla', _auto.renderTabla);

//ALTAS
router.get('/altas', function (req, res) {
  res.render('altas');
});
router.get('/tabla', function (req, res) {
  res.render('tabla');
});
router.post('/autos/add', _auto.insertarAuto);

//BAJAS
router.get('/autos/:id/delete', _auto.deleteAuto);

//CAMBIOS
router.get('/autos/:id/edit', _auto.getEdit);
router.post('/autos/:id/edit', _auto.postEdit);

//Export
var _default = exports["default"] = router;