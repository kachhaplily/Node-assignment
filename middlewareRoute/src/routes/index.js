import express from "express";
import { tokenMiddleware } from "../middlewere/auth.js";

const router = express.Router();

// Route with middleware (token required)
router.get("/profile", tokenMiddleware, (req, res) => {
  res.json({ user: "Lily", role: "Admin" });
});

// Route without middleware (public)
router.get("/public", (req, res) => {
  res.json({ message: "This is a public route" });
});

export default router;
