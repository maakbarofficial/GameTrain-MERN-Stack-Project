import express from "express";
import {
  getAllUsers,
  getUser,
  login,
  logout,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/allusers", getAllUsers);

router.post("/register", register);

router.post("/login", login);

router.get("/user/:id", isAuthenticated, getUser);

router.get("/logout", logout);

// router.put("/user/:id", updateUser);

// router.delete("/user/:id", deleteUser);

// router.route("/user/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
