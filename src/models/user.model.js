const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
firstName:{String:true,required:true},
lastName:{String:true,required:false},
email:{String:true,required:true},
password:{String:true,required:true},
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("user",userSchema);


