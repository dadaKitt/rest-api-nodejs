const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restapi'
})


app.post('/users', async(req, res) => {
    res.json(req.body)
})

connection.execute(
    'SELECT * FROM users',
    function(err, results, fields){
        console.log(results)
        console.log(fields)
        return false
    } 
);

app.listen(port, () => {
  console.log(`Server run on port: ${port}`)
})