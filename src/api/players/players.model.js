const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playersShema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    img: { type: String, required: true, trim: true },
    team: { type: String },
    age: { type: Number, required: true, trim: true },
    dorsal: { type: Number, trim: true },
    position: { type: String, trim: true },
  },

  {
    timestamps: true,
  }
);

const Player = mongoose.model("players", playersShema);

module.exports = Player;
