const express=require('express')
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('<h1>Auto Scaling Group Demo</h1> <p> this is demo</p>')
})

app.listen(port,()=>{
    console.log(`demo is running om ${port}`)
})