// ROUTE NAME: ./api/shiny-hunt
const express = require('express')
const { validationResult } = require("express-validator");
const shinyHuntValidationRules = require("../validators/shiny_hunt");
// import * as rf from './_routeFunctions.js';


module.exports = (db) => {
  const router = express.Router();

  // GET - Get all hunts (Index route)
  router.get('/', (req, res) => {
    const query = 'SELECT * FROM shiny_hunt'
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        res.json(results);
      }
    });
  });

  // GET - one hunt by shiny_hunt_id - ./api/shiny-hunt/:shiny_hunt_id
  router.get('/', (req, res) => {
    const query = `SELECT * FROM shiny_hunt WHERE shiny_hunt_id = ${req.body.shiny_hunt_id}`
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        res.json(results);
      }
    });
  })

  // POST - add new hunt- ./api/shiny-hunt/add
  router.post('/add', shinyHuntValidationRules, (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const query = `
        INSERT INTO shiny_hunt (
            ot, 
            game, 
            shiny_hunt_date, 
            num_encounters, 
            num_shiny, 
            locations, 
            target_pokemon, 
            target_encounters, 
            date_created, 
            date_updated, 
            is_active, 
            time_update 
        ) VALUES (
            '${req.body.ot}','${req.body.game}','${req.body.shiny_hunt_date}',${req.body.num_encounters},${req.body.num_shiny},'${req.body.locations}','${req.body.target_pokemon}',${req.body.target_encounters},CURDATE(),CURDATE(),true,NOW())`
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
