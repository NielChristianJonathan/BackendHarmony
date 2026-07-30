const app = require("./app");

const start = () => {
    app.listen(3000);
    console.log("Running in server 3000")
};

start()