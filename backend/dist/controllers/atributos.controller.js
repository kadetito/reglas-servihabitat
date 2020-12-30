"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAtributosByIdTipo = exports.listAtributos = void 0;
const mysql_1 = __importDefault(require("../mysql/mysql"));
function listAtributos(req, res) {
    const objeto = "";
    const query = `SELECT * FROM atributos`;
    mysql_1.default.ejecutarQuery(query, objeto, (error, atributos) => {
        if (error) {
            res.status(400).json({
                ok: false,
                warning: "El FBI se dirige a su domicilio",
            });
        }
        else {
            res.json({
                ok: true,
                atributos: atributos,
            });
        }
    });
}
exports.listAtributos = listAtributos;
function listAtributosByIdTipo(req, res) {
    const house_id = mysql_1.default.instance.conn.escape(req.params.house_id);
    const objeto = "";
    const query = `SELECT * FROM atributos WHERE house_id=${house_id}`;
    mysql_1.default.ejecutarQuery(query, objeto, (error, atributos) => {
        if (error) {
            res.status(400).json({
                ok: false,
                warning: "El FBI se dirige a su domicilio",
                error: error,
            });
        }
        else {
            res.json({
                ok: true,
                atributos: atributos,
            });
        }
    });
}
exports.listAtributosByIdTipo = listAtributosByIdTipo;
// export function createJornada(req: Request, res: Response) {
//   const objeto: Jornadas = req.body;
//   const query = `INSERT INTO panel_registro_jornada SET ?`;
//   MySQL.ejecutarQuery(query, objeto, (error: any, jornadas: Object[]) => {
//     if (error) {
//       res.status(400).json({
//         ok: false,
//         warning: "Fallo en la recepcion de datos",
//         // error: error,
//       });
//     } else {
//       res.json({
//         ok: true,
//         jornadas: jornadas,
//       });
//     }
//   });
// }
// export function detalleJornada(req: Request, res: Response) {
//   const id_jornada = MySQL.instance.conn.escape(req.params.id_jornada);
//   const objeto = "";
//   const query = `SELECT * FROM panel_registro_jornada WHERE id_jornada=${id_jornada}`;
//   MySQL.ejecutarQuery(query, objeto, (error: any, jornada: Object[]) => {
//     if (error) {
//       res.status(400).json({
//         ok: false,
//         warning: "El FBI se dirige a su domicilio",
//         error: error,
//       });
//     } else {
//       res.json({
//         ok: true,
//         jornada: jornada,
//       });
//     }
//   });
// }
// export function deleteJornada(req: Request, res: Response) {
//   const id_jornada = MySQL.instance.conn.escape(req.params.id_jornada);
//   const objeto = "";
//   const query = `SELECT * FROM panel_registro_jornada WHERE id_jornada=${id_jornada}`;
//   MySQL.ejecutarQuery(query, objeto, (error: any, jornada: Object[]) => {
//     if (error) {
//       res.status(400).json({
//         ok: false,
//         warning: "El FBI se dirige a su domicilio",
//         // error: error,
//       });
//     } else {
//       res.json({
//         ok: true,
//         jornada: jornada,
//       });
//     }
//   });
// }
// export function updateJornada(req: Request, res: Response) {
//   const id_jornada = MySQL.instance.conn.escape(req.params.id_jornada);
//   const objeto: Jornadas = req.body;
//   const query = `UPDATE panel_registro_jornada SET ? WHERE id_jornada = ${id_jornada}`;
//   MySQL.ejecutarQuery(query, objeto, (error: any, jornadas: Object[]) => {
//     if (error) {
//       res.status(400).json({
//         ok: false,
//         warning: "El FBI se dirige a su domicilio",
//         // error: error,
//       });
//     } else {
//       res.json({
//         ok: true,
//         jornadas: jornadas,
//       });
//     }
//   });
// }
