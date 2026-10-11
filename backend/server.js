require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err)=>{
    if(err){
        console.log("MySQL Error:", err);
    } else {
        console.log("MySQL Connected");
    }
});

const path = require("path");

app.get("/", (req,res)=>{
    res.send("LifeFlow BloodBank Backend Running");
});

app.get("/download-report", (req, res) => {
    const filePath = path.join(__dirname, "..", "LifeFlow_Internship_Report.pdf");
    res.download(filePath, "LifeFlow_Internship_Report.pdf");
});

app.post("/register", async (req,res)=>{

const {
name,
email,
phone,
blood_group,
password,
age,
location
}=req.body;
const hashedPassword = await bcrypt.hash(password, 10);


const sql =
"INSERT INTO users(name,email,phone,blood_group,password,age,location) VALUES(?,?,?,?,?,?,?)";


db.query(
sql,
[
name,
email,
phone,
blood_group,
hashedPassword,
age,
location
],
(err,result)=>{

if(err){
res.json(err);
}
else{
res.json({
message:"User Registered"
});
}

});

});
app.post("/login", async (req,res)=>{

 const {email,password} = req.body;

 db.query(
  "SELECT * FROM users WHERE email=?",
  [email],
  async (err,result)=>{

   if(err){
    return res.json(err);
   }

   if(result.length > 0){

    const match = await bcrypt.compare(
     password,
     result[0].password
    );

    if(match){
    delete result[0].password;
      return res.json({
      success:true,
      user:result[0]
     });
    }
    else{
     return res.json({
      success:false
     });
    }

   }
   else{
    return res.json({
     success:false
    });
   }

  }
 );

});
app.get("/findblood/:blood", (req,res)=>{

const blood = req.params.blood;

db.query(
"SELECT name,email,phone,blood_group FROM users WHERE blood_group=?",
[blood],
(err,result)=>{

if(err){
 return res.send(err);
}

res.send(result);

});

});
app.get("/bloodstock",(req,res)=>{

 db.query(
 "SELECT blood_group, COUNT(*) as total FROM users GROUP BY blood_group",
 (err,result)=>{

  if(err){
   return res.send(err);
  }

  res.json(result);

 });

});
app.post("/sos",(req,res)=>{

 const {name,phone,blood_group,message}=req.body;

 db.query(
 "INSERT INTO sos_requests(name,phone,blood_group,message) VALUES(?,?,?,?)",
 [name,phone,blood_group,message],
 (err,result)=>{

  if(err){
   return res.send(err);
  }

  res.send({
   success:true,
   message:"SOS Request Sent"
  });

 });

});
app.post("/chat",(req,res)=>{

 const {name,message}=req.body;

 db.query(
 "INSERT INTO chats(name,message) VALUES(?,?)",
 [name,message],
 (err,result)=>{

  if(err){
   return res.send(err);
  }

  res.send({
   success:true
  });

 });

});


app.get("/chat",(req,res)=>{

 db.query(
 "SELECT * FROM chats",
 (err,result)=>{

  if(err){
   return res.send(err);
  }

  res.send(result);

 });

});

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running on port 5000");
});