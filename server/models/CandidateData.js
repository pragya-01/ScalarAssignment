const mongoose = require("mongoose");

const CandidateDataSchema = new mongoose.Schema(
  {
    CandidateID: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    // startTime:{
    //   type: Date,
    //   required:true,
    // },
    // endTime:{
    //     type : Date,
    //     required : false
    // } 
  },
  { timestamps: true }
);

module.exports = mongoose.model("CandidateData", CandidateDataSchema);
