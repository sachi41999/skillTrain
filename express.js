const express=require('express');
const path=require('path');

const app=express();
app.use(express.static(path.join(__dirname,'dist/skill-oopz')));



app.get('/*',(req,res)=>{
    res.sendFile('index.html',{root:'dist/skill-oopz'})
});

const port =process.env.PORT||8002;

app.listen(port);