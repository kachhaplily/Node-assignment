import express from "express";
import path from "path";

const router = express.Router();

// ✅ GET / → serve login.html
router.get("/", (req, res) => {
  res.sendFile(path.resolve("public/login.html"));
});

// POST /auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // ✅ Just log the data instead of storing
  console.log("Login attempt:", { email, password });

  res.send(`<h2>Login successful!</h2><p>Email: ${email}</p>`);
});
export default router;
