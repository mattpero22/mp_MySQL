// load environment variables
require('dotenv').config({ path: '.env' })

// import and setup packages
const cors = require('cors')
const express = require('express')
const mysql = require('mysql2') // upgraded to mysql2 to connect to MySQL 8.0+ db

// import API routers
const activityRouter = require('./routes/activity');
const personRouter = require('./routes/person');
const shinyHuntRouter = require('./routes/shiny_hunt');

// init the express app
const app = express()

// mount middleware
app.use(cors())
app.use(express.json())

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

db.query('SELECT 1', (err, results) => {
    if (err) {
      console.error('Test query failed:', err);
    } else {
      console.log('Test query succeeded:', results);
    }
  });


// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api/activity', activityRouter(db))
app.use('/api/person', personRouter(db));
app.use('/api/shiny-hunt', shinyHuntRouter(db));


// run express app on port 3000, or specify a port in .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
