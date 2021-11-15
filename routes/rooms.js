const express = require("express");
const router=express.Router();

const rooms= require("./rooms.json");



router.get("/rooms",(req,res) =>{
    res.end("HALL BOOKING API");
});

router.get("/",(req,res) =>{
    res.send(rooms);
});

router.post("/",(req,res) =>{
    
    res.send({...req.body,id:6});
});

router.put("/:id",(req,res) =>{
    
    res.send({...req.body,...req.params});
});

router.delete("/:id",(req,res) =>{
    res.send({});
});

module.exports=router;