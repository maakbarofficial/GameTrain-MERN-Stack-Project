import express from "express";
import {
  createTask,
  deleteTask,
  updateTask,
  userTasks,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createtask", isAuthenticated, createTask);
router.get("/usertasks", isAuthenticated, userTasks);
router
  .route("/task/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
