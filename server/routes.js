"use strict";

export default app => {
  app.use("/api/salas", require("./routes/sala"));
  app.use("/api/personas", require("./routes/persona"));

  app.use("/api/autenticacion", require("./routes/autenticacion"));
  app.use("/api/usuarios", require("./routes/usuario"));
  app.use("/api/unidades-educativas", require("./routes/ue"));
  app.use("/api/reclamos", require("./routes/reclamo"));

};
