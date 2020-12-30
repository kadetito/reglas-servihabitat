import { Router } from "express";

import {
  listAtributos,
  listAtributosByIdTipo,
} from "../controllers/atributos.controller";
import { verificaToken } from "../middleware/auth.middleware";

const atributos = Router();

atributos.route("/atributos").get(verificaToken, listAtributos);
atributos
  .route("/atributos/:house_id")
  .get(verificaToken, listAtributosByIdTipo);
// atributos.route("/crtjornada").post(createJornada);
// atributos.route("/jornada/:id_jornada").get(detalleJornada);
// atributos.route("/deljornada/:id_jornada").delete(deleteJornada);
// atributos.route("/updjornada/:id_jornada").put(updateJornada);

export default atributos;
