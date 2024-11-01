// ROUTE NAME: ./api/person
const express = require('express');
// import * as rf from './_routeFunctions.js';

module.exports = (db) => {
  const router = express.Router();

  // GET - Get all persons (Index route)
  router.get('/', (req, res) => {
    const query = 'SELECT * FROM person'
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        res.json(results);
      }
    });
  });

  // GET - one person by person_id - ./api/person/:person_id
  router.get('/', (req, res) => {
    const query = `SELECT * FROM person WHERE person_id = ${req.body.person_id}`
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
