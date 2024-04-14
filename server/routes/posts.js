import express from "express";
import { getFeedPosts, getUsePosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/post", verifyToken, getUsePosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;
