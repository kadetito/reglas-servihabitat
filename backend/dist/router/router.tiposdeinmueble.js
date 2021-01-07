"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposinmuebles_controller_1 = require("../controllers/tiposinmuebles.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const tiposInmuebles = express_1.Router();
//tiposInmuebles.route("/tiposinmueble").get(listTiposInmuebles);
tiposInmuebles.route("/tiposinmueble").get(auth_middleware_1.verificaToken, tiposinmuebles_controller_1.listTiposInmuebles);
exports.default = tiposInmuebles;
