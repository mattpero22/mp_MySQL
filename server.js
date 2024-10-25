// load environment variables
require('dotenv').config({ path: '.env' })

// import and setup packages
const cors = require('cors')
const express = require('express')
const mysql = require('mysql2') // upgraded to mysql2 to connect to MySQL 8.0+ db

// import API routers
const personRouter = require('./routes/person');

// init the express app
const app = express()

// mount middleware
app.use(cors())


// connect to mysql db
// create .env with variables in the same directory as server.js
const db = mysql.createConnection({
    host: process.env.DB_HOST,      // replace with your host, typically 'localhost'
    user: process.env.DB_USER,      // your username credential
    password: process.env.DB_PASS,  // password
    database: process.env.DB_NAME,  // name of database to connect to
    port: process.env.DB_PORT       // port the server is being hosted on
})

db.connect((err) => {
    console.log('connecting to mysql...')
    if (err) {
        console.error('error connecting to mysql:', err)
    } else {
        console.log('connected to mysql database')
    }
})


// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api/person', personRouter(db));


// run express app on port 3000, or specify a port in .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
