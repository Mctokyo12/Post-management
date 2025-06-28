const express = require("express");
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require("../Controllers/post.controller");
const router = express.Router();
const { authUser }  = require("../Middlewares/auth");

router.get("/", authUser,getPosts);
router.post("/", authUser , setPosts);
router.put("/:id" , authUser, editPost);
router.delete("/:id" , authUser, deletePost);
router.patch("/like/:id" , authUser, likePost);
router.patch("/dislike/:id",authUser, dislikePost);

module.exports = router;