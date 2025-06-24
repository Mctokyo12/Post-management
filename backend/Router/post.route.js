const express = require("express");
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require("../Controllers/post.controller");
const router = express.Router();
const userAuth = require("../Middlewares/auth")

router.get("/",getPosts);
router.post("/", userAuth , setPosts);
router.put("/:id" , userAuth, editPost);
router.delete("/:id" , userAuth, deletePost);
router.patch("/like/:id" , userAuth, likePost);
router.patch("/dislike/:id",userAuth, dislikePost);

module.exports = router;