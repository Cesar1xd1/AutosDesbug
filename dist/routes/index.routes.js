"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auto = require("../controllers/auto.controlador");
var _cliente = require("../controllers/cliente.controlador");
var router = (0, _express.Router)();
//Index
router.get('/', _auto.renderIndexA);
router.get('/tabla', _auto.renderTablaA);
router.get('/clientes', _cliente.renderTablaC);

//ALTAS
router.get('/altas', function (req, res) {
  res.render('altas');
});
router.get('/altasC', function (req, res) {
  res.render('altasC');
});

//render
router.get('/tabla', function (req, res) {
  res.render('tabla');
});
router.get('/clientes', function (req, res) {
  res.render('clientes');
});
router.post('/autos/add', _auto.insertarAuto);
router.post('/clientes/add', _cliente.insertarCliente);

//BAJAS
router.get('/autos/:id/delete', _auto.deleteAuto);
router.get('/clientes/:id/deleteC', _cliente.deleteCliente);

//CAMBIOS
router.get('/autos/:id/edit', _auto.getEditA);
router.post('/autos/:id/edit', _auto.postEditA);
router.get('/clientes/:id/editC', _cliente.getEditC);
router.post('/clientes/:id/editC', _cliente.postEditC);

//Export
var _default = exports["default"] = router;