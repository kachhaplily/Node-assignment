import express from "express";
import loginRoute from "./routes/loginRoute.js";
import staticMiddleware from "./middlewareRoute/check.js";

const app = express();
const port = 3000;

// ✅ middleware for parsing form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ static middleware (serves style.css, js, images, etc.)
app.use(staticMiddleware);

// ✅ routes
app.use("/", loginRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
