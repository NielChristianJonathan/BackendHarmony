const app = require("./app");
const { poolPg } = require("./src/config/supabase");

const start = async() => {
    try {
        await poolPg.query("SELECT 1");
        console.log("Database Connected")
        app.listen(3000);
        console.log("Running in server 3000")
        
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

start()