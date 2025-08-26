import express from "express";
import indexRoute from "./routes/index.js";

const app = express();
const PORT = 3000;

// Mount routes
app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
