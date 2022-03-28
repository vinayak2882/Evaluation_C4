const mongoose = require("mongoose");
const user = require("./user.model.js");

const todoSchema = new mongoose.Schema({
title:{String:true,required:true},
userId: {
type:mongoose.Schema.Types.ObjectId,
ref:user,
required:true,
}
},

 {
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("Todo",todoSchema);

