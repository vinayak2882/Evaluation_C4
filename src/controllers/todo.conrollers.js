const express = require("express");

// const client = require("../configs")

const Todo =require("../models/todo.model");

const router = express.Router();

router.post("", async(req,res)=>{
    try {
      const todo =await Todo.create(req.body);
      const todos =await Todo.find().lean().exec();
      return res.status(201).send(todo);  
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

router.get("",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})