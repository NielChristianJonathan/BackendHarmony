const { poolPg } = require("./supabase")

const initDatabase = async () => {
    console.log(`Connecting Database...`)
    const db = poolPg;
}