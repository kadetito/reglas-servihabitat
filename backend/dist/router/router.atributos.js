"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const atributos_controller_1 = require("../controllers/atributos.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const atributos = express_1.Router();
atributos.route("/atributos").get(auth_middleware_1.verificaToken, atributos_controller_1.listAtributos);
atributos
    .route("/atributos/:house_id")
    .get(auth_middleware_1.verificaToken, atributos_controller_1.listAtributosByIdTipo);
// atributos.route("/crtjornada").post(createJornada);
// atributos.route("/jornada/:id_jornada").get(detalleJornada);
// atributos.route("/deljornada/:id_jornada").delete(deleteJornada);
// atributos.route("/updjornada/:id_jornada").put(updateJornada);
exports.default = atributos;
