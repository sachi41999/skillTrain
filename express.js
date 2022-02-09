const epresss=require('express');
const path=require('path');

const app=express();

app.use(express.static('./dist/skill-oopz'));

app.get('/*',(req,res)=>{
    res.sendFile('index.html',{root:'dist/skill-oopz'})
});

app.listen(process.env.PORT||8000);