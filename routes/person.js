// ROUTE NAME: ./api/person
const express = require('express');

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

  return router;
};