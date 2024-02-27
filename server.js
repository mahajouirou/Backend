const experess =require("express")
const mysql = require ("mysql")
const cors =require ("cors")

const app =experess()
app.use(cors())
const db = mysql.createConnection({
    host : "localhost" ,
    user :"root",
    password :'' ,
    database :'socialmanage'

})
app.get('/login_user' ,(req,res)=>{
    const sql = 'SELECT * from `login_user`';
  
    db.query(sql,(err,data)=>{
        if(err) {
            console.log(err)
            return res.json(err);
        }
        return res.json(data);

    })

})

app.get('/', (req,res)=>{
    return res.json("de backend");

} )
app.listen(8081,()=>{
    console.log("connected");


})