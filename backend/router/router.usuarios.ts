import { Router } from "express";
import { verificaToken } from "../middleware/auth.middleware";

import {
  listUsuarios,
  createUsuario,
  detalleUsuario,
  loginUsuario,
  deleteUsuario,
  updateUsuario,
  updateToken,
  observaToken,
  revalidarToken,
} from "../controllers/usuarios.controller";

const usuarios = Router();

usuarios.route("/users").get(verificaToken, listUsuarios);
usuarios.route("/crtuser").post(createUsuario);
usuarios.route("/login").post(loginUsuario);
usuarios.route("/user/:id_persona").get(detalleUsuario);
usuarios.route("/deluser/:id_persona").delete(deleteUsuario);
usuarios.route("/upduser").put(updateUsuario);
usuarios.route("/updtoken").post(verificaToken, updateToken);
usuarios.route("/vltkn").get(observaToken);
usuarios.route("/renew").get(verificaToken, revalidarToken);

export default usuarios;
