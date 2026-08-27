const {Pool} = require("pg");
const { CONNECTION_STRING } = require("../constant/env");


const poolPg = new Pool({
    connectionString: CONNECTION_STRING
})



module.exports = {poolPg}