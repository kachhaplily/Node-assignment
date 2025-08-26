import express from "express";

import path from "path";

const staticMiddleware = express.static(path.resolve("public"));
export default staticMiddleware;

