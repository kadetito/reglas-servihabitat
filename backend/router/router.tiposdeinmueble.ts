import { Router } from "express";

import { listTiposInmuebles } from "../controllers/tiposinmuebles.controller";
import { verificaToken } from "../middleware/auth.middleware";

const tiposInmuebles = Router();

//tiposInmuebles.route("/tiposinmueble").get(listTiposInmuebles);
tiposInmuebles.route("/tiposinmueble").get(verificaToken, listTiposInmuebles);

export default tiposInmuebles;
