// ROUTE NAME: ./api/activity
const express = require('express');
// import * as rf from './_routeFunctions.js';

module.exports = (db) => {
  const router = express.Router();

  // GET - Get all activities (Index route)
  router.get('/', (req, res) => {
    const query = 'SELECT * FROM activity'
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        res.json(results);
      }
    });
  });

  // GET - one activity by activity_id - ./api/activity/:activity_id
  router.get('/', (req, res) => {
    const query = `SELECT * FROM activity WHERE activity_id = ${req.body.person_id}`
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        res.json(results);
      }
    });
  })

  return router;
}
