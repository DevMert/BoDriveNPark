import { Schema, mongoose } from "mongoose";

const week = new Schema({});

module.exports = mongoose.model("week", week);
