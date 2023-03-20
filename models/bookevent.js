const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    event_list: {
      type: String,
    },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    date: {
      type: String,
    },
    country:{
        type: String,
    },
    state:{
        type: String,
    },
    city:{
        type: String,
    },
    mode:{
        type: String,
    },
    address:{
        type: String,
    },
    email:{
        type: String,
    },
   mobile:{
    type: Number,
   }
   },
  { timestamps: true }
);

module.exports = mongoose.model("bookevent", thisSchema);
