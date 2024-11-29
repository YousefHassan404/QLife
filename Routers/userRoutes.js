import express from "express";
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} from "../Controllers/userController.js";

const router = express.Router();

// Routes
router.post("/", createUser); // Create
router.get("/:id", getUserById); // Read by ID
router.put("/:id", updateUser); // Update
router.delete("/:id", deleteUser); // Delete
router.get("/", getAllUsers); // Get all

export default router;
