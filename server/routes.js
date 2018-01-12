"use strict";

export default app => {
  app.use("/api/salas", require("./routes/sala"));
  app.use("/api/personas", require("./routes/persona"));
};
