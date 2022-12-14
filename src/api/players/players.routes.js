const express = require("express");
const Player = require("./players.model");
const router = express.Router();

const deleteFile = require("../../middlewares/deleteFile");

router.get("/", async (req, res, next) => {
  try {
    const allPlayers = await Player.find();
    return res.status(200).json(allPlayers);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const playerToFind = await Player.findById(id);
    return res.status(200).json(playerToFind);
  } catch (error) {
    return next(error);
  }
});

router.get("/getbyname/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const playerToFind = await Player.findOne({ name: name });
    return res.status(200).json(playerToFind);
  } catch (error) {
    return next(error);
  }
});

router.post(
  "/create",

  async (req, res, next) => {
    console.log(req.body);
    try {
      const player = req.body;
      const newPlayer = new Player(player);
      const created = await newPlayer.save();
      return res.status(201).json(created);
    } catch (error) {
      return next(error);
    }
  }
);

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const player = await Player.findById(id);
    const playerToDelete = await Player.findByIdAndDelete(id);
    return res
      .status(200)
      .json(`Se ha conseguido borrar el jugador ${playerToDelete.name}`);
  } catch (error) {
    return next(error);
  }
});

router.put(
  "/edit/:id",

  async (req, res, next) => {
    try {
      const id = req.params.id;
      const player = req.body;
      const playerOld = await Player.findById(id);
      if (req.file) {
        if (playerOld.img) {
          deleteFile(playerOld.img);
        }
        team.img = req.file.path;
      }
      const playerModify = new Player(player);
      playerModify._id = id;
      const playerUpdated = await Player.findByIdAndUpdate(id, playerModify);
      return res.status(200).json({
        mensaje: "Se ha conseguido editar el jugador",
        playerModificado: playerUpdated,
      });
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = router;
