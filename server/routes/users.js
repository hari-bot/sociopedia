import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  resetPassword,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*READ*/
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/*UPDATE*/

router.post("/reset-password", resetPassword);
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
