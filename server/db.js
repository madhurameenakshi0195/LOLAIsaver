const {Pool} = require("pg");


const pool = new Pool({
   user: "c.madhurameenakshi",
   host:"localhost",
   database:"credexproject7",
 
   port : 5432,
});
   
   module.exports = pool;