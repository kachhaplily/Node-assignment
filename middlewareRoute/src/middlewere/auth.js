export function tokenMiddleware(req, res, next) {
  const token = req.query.token; // or req.headers["token"]

  if (token === "12345") {
    console.log("Token matched ✅");
    next(); // continue to route
  } else {
    console.log("Invalid token ❌");
    res.status(401).json({ message: "Invalid Token" });
  }
}
