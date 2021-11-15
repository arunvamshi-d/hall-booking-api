const express = require("express");
const router=express.Router();

const customers=require("./customers.json");



router.get("/",(req,res) =>{
    res.send(customers);
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