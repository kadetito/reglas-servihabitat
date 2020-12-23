import dotenv from "dotenv";
dotenv.config();

import Server from "./server/server";
const server = Server.init(3000);

server.start(() => {
  const portt = process.env.PORT || 3000;

  console.log(`El servidor está levantado en puerto ${portt}`);
});
