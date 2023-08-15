import express from "express";
import bodyParser from "body-parser";

let str=[];
let strl=0;
let str2=[];
let strl2=0
const today=new Date();
const app=express();
const port =3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true }))

app.get("/",(req,res)=>{
    res.render("index.ejs",{strn : str,daye : today});
});
app.post("/submit",(req,res)=>{
    str[strl]=req.body["event"];
    strl++;
    res.render("index.ejs",{strn : str,daye : today});
});


app.get("/work",(req,res)=>{
    res.render("work.ejs",{strn2 :str2});
});
app.post("/submit2",(req,res)=>{
    str2[strl2]=req.body["event"];
    strl2++;
    res.render("work.ejs",{strn2 : str2});
});



app.listen(port,()=>{
    console.log(`server is running on port ${port} `);
})