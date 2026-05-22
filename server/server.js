const express = require("express");
const cors = require("cors");
const app = express();
const pool =require("./db")


app.use(cors());
app.use(express.json());

app.get("/",(req, res)=> {
res.send("backend day 1");
});

const PORT = 5000;

app.listen(PORT, ()=> {
     console.log(`server running on port ${PORT}`);
     
})

app.get("/test-db" , async (req,res) =>{
   try{
      const{rows} = await pool.query("SELECT NOW()");
     
      res.status(200).json({
        succes : true,
        time: rows[0].now,
        
      });
     
   }catch (error){
        
        console.error(error.message);
        
        res.status(500).json({
           success: false,
           error: "Database connection failed",
        });
    } 
     
});