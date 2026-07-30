const express = require("express");
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./src/routes/auth.routes");
const { responseMiddleware } = require("./src/middleware/response.middleware");
const { errorMiddleware } = require("./src/middleware/error.middleware");

const app = express();


app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(responseMiddleware);

// Routing
app.use("/api/auth", authRouter)

// Error Middleware
app.use(errorMiddleware);

module.exports = app