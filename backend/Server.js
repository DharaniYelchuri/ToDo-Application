const express=require('express');
const mongoose=require('mongoose');
const routes=require('./routes/ToDoRoute');
const cors=require('cors')

require('dotenv').config()//

const app=express();
const PORT=process.env.port || 5000;

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("connected to mongodb..."))
.catch((err)=>console.log("error connecting to mongodb..."))

app.use(routes);


app.listen(PORT,()=>{
    console.log(`Listening on :http://localhost:${PORT}`);
})