const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`,`MobileNumber`,`Age`,`CollegeName`) VALUES (?)";
    const values = [
        req.body.name[0],
        req.body.email[0],
        req.body.password[0],
        req.body.MobileNumber[0],
        req.body.Age[0],
        req.body.CollegeName[0]
    ]
    db.query(sql, [values], (error, data) => {
        console.log(error)
        if(error) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email[0], req.body.password[0]], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    })
})

// Define route to retrieve data based on email
app.get('/users/:email', (req, res) => {
    const email = req.params.email;
  
    const query = `SELECT * FROM login WHERE email = '${email}'`;
  
    db.query(query, (error, results) => {
      if (error) {
        // Handle error if the query fails
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        // Send the retrieved data as the response
        res.json(results);
      }
    });
  });

app.listen(8081, ()=> {
    console.log("listening");
})