"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auto = require("../controllers/auto.controlador");
var _cliente = require("../controllers/cliente.controlador");
var _vendedor = require("../controllers/vendedor.controlador");
var router = (0, _express.Router)();
//Index
router.get('/', _auto.renderIndex);

//TABLAS
router.get('/tabla', _auto.renderTablaA);
router.get('/clientes', _cliente.renderTablaC);
router.get('/vendedores', _vendedor.renderTablaV);

//ALTAS
router.get('/altas', function (req, res) {
  res.render('altas');
});
router.get('/altasC', function (req, res) {
  res.render('altasC');
});
router.get('/altasV', function (req, res) {
  res.render('altasV');
});

//render
router.get('/tabla', function (req, res) {
  res.render('tabla');
});
router.get('/clientes', function (req, res) {
  res.render('clientes');
});
router.get('/vendedores', function (req, res) {
  res.render('vendedores');
});

//ADD
router.post('/autos/add', _auto.insertarAuto);
router.post('/clientes/add', _cliente.insertarCliente);
router.post('/vendedores/add', _vendedor.insertarVendedor);

//BAJAS
router.get('/autos/:id/delete', _auto.deleteAuto);
router.get('/clientes/:id/deleteC', _cliente.deleteCliente);
router.get('/vendedores/:id/deleteV', _vendedor.deleteVendedor);

//CAMBIOS
router.get('/autos/:id/edit', _auto.getEditA);
router.post('/autos/:id/edit', _auto.postEditA);
router.get('/clientes/:id/editC', _cliente.getEditC);
router.post('/clientes/:id/editC', _cliente.postEditC);
router.get('/vendedores/:id/editV', _vendedor.getEditV);
router.post('/vendedores/:id/editV', _vendedor.postEditV);

//Errores
router.get('/errorAUni', _auto.renderEAU);
router.get('/errorAEmp', _auto.renderEAE);
router.get('/errorCUni', _cliente.renderECU);
router.get('/errorCEmp', _cliente.renderECE);
router.get('/errorVUni', _vendedor.renderEVU);
router.get('/errorVEmp', _vendedor.renderEVE);
router.get('/validAedit', _auto.rendervalidA);
router.get('/validCedit', _cliente.rendervalidC);
router.get('/validVedit', _vendedor.rendervalidV);

//Export
var _default = exports["default"] = router;