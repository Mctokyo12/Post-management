const express = require("express");
const { setPosts, getPosts } = require("../Controllers/post.controller");
const router = express.Router();

router.get("/",getPosts);

router.post("/",setPosts);

router.put("/:id" , (req ,res)=>{
    res.json({MessageId: req.params.id});
});

router.delete("/:id" , (req ,res)=>{
    res.json({Message: "Post supprime et  Id: "+req.params.id});
});

router.patch("/like/:id" , (req,res)=>{
    res.json({Message: "Post Like  et id: "+ req.params.id});
});

router.patch("/dislike/:id", (req , res)=>{
    res.json({Message: "Post dislike et id "+ req.params.id});
});

module.exports = router;