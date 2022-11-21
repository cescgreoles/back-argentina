const express = require("express");

const cors = require("cors");
const db = require("./src/utils/database/db");
require("dotenv").config();

const indexRoutes = require("./src/api/index/index.routes");
const playersRoutes = require("./src/api/players/players.routes");
// const usersRoutes = require("./src/api/users/users.routes");

db.connectDb();

const server = express();
const PORT = 3000;

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ extended: false }));

server.use("/", indexRoutes);
server.use("/players", playersRoutes);
// server.use("/users", usersRoutes);

server.use("", (req, res) => {
  return res.status(404).json("Ruta no encontrada");
});

server.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
