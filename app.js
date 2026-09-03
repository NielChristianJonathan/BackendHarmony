require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./src/routes/auth.routes");
const playlistRouter = require("./src/routes/playlists.routes");
const songRouter = require("./src/routes/songs.routes");
const { responseMiddleware } = require("./src/middleware/response.middleware");
const { errorMiddleware } = require("./src/middleware/error.middleware");
const cookieParser = require("cookie-parser");

const app = express();


app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(cookieParser());
app.use(responseMiddleware);

// Routing
app.use("/api/auth", authRouter)
app.use("/api/playlists", playlistRouter)
app.use("/api/songs", songRouter)

// Error Middleware
app.use(errorMiddleware);

module.exports = app