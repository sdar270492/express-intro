const express = require("express");

const app = express();

app.use(express.json())

app.get('/', (req, res)=> {
    // res.send('<h1>hello!</h1>');
    res.json({message: 'hello!'})
});

app.get('/home', (req, res)=> {
    res.json({message: 'hello from home!'})
});

app.get('/users/:id', (req, res)=> {
    res.json({message: `hello! ${req.params.id}`})
});

// /query?name=sergio&color=blue
app.get('/query', (req, res)=> {
    // res.json({message: `hello! ${JSON.stringify(req.query)}`})
    res.json({message: `hello! ${req.query.name}`})
});

app.post('/foo', (req, res)=> {
    // res.json({message: `hello! ${JSON.stringify(req.query)}`})
    res.json({message: `hello! ${req.body.name}`})
});

app.listen(3001, ()=>{
    console.log('Ready!');
});