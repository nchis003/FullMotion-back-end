import cors from 'cors';
import express from 'express';
import mysql from 'mysql';

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "",  //front-end url origin: [""]
        methods: ["POST, GET"],
        credentials: true        
    }

))

const db = mysql.createConnection({
    host: "local",
    user: "root",
    password: "",
    database: "signup"
})


app.listen(8081, ()=> {
    console.log("Running")
})

// Ended HERE at https://www.youtube.com/watch?v=GzlQS-0eWEI at 7 min