const express = require('express');
const app = express();

const middleware1 = (req,res,next)=>{
    console.log("middleware 1");
    next();
}
 
const middleware2 = (req,res,next)=>{
    console.log("middleware 2 for glabally");
    next();
}

app.use(middleware2);

app.get('/link1',middleware1,(req,res)=>{
    res.send("<h1>Link 1 with middleware 1 and 2</h1>")

})

app.get('/link2',(req,res)=>{
    res.send("<h1>Link 2 with middleware 2 </h1>")

})

app.get('/link3',(req,res)=>{
    res.send("<h1>Link 3 with middleware 2</h1>")

})

app.get('/link4',middleware1,(req,res)=>{
    res.send("<h1>Link 4 with middleware 1 and 2</h1>")

})

app.listen=(3001,()=>{
    console.log('server started on port 3001');
});

