const express = require('express')
const app = express()
const mysqli = require('mysql2')
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connection = mysqli.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restapi'
})


app.post('/users', async(req, res) => {
    connection.execute(
        'SELECT * FROM users',
        function(err, results, fields){
            console.log(results)
            console.log(fields)
            return false
        } 
    );
})


app.listen(port, () => {
  console.log(`Server run on port: ${port}`)
})