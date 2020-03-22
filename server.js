const express = require('express');

const app = express();



app.get('/', (req,res)=>{
	res.send("Here is my test app");
})


app.listen(9000, ()=>{
	console.log("Server started at port 9000");
})
