const express = require("express");
const cors = require("cors");
const { responseMiddleware } = require("./src/middleware/response.middleware");
const app = express();

app.use(cors({
    credentials: true
}))
app.use(express.json());
app.use(responseMiddleware);

// Routing
app.use("/api/auth", )



module.exports = app