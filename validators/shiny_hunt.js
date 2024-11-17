const { body } = require("express-validator");

const shinyHuntValidationRules = [
  // ot: VARCHAR(8)
  body("ot")
    .isString().withMessage("OT must be a string.")
    .isLength({ max: 8 }).withMessage("OT can be a maximum of 8 characters."),

  // game: ENUM
  body("game")
    .isIn([
      "Red", "Blue", "Yellow", "Gold", "Silver", "Crystal", "Ruby", "Sapphire", 
      "Emerald", "FireRed", "LeafGreen", "Diamond", "Pearl", "Platinum", 
      "HeartGold", "SoulSilver", "Black", "White", "Black 2", "White 2"
    ]).withMessage("Game must be a valid value from the game list."),

  // shiny_hunt_date: DATE
  body("shiny_hunt_date")
    .optional()
    .isISO8601().withMessage("Shiny hunt date must be a valid date (YYYY-MM-DD)."),

  // num_encounters: SMALLINT UNSIGNED
  body("num_encounters")
    .isInt({ min: 0, max: 65535 }).withMessage("Number of encounters must be a positive integer (0-65535)."),

  // num_shiny: SMALLINT UNSIGNED
  body("num_shiny")
    .isInt({ min: 0, max: 65535 }).withMessage("Number of shiny Pokémon must be a positive integer (0-65535)."),

  // locations: VARCHAR(255)
  body("locations")
    .optional()
    .isString().withMessage("Locations must be a string.")
    .isLength({ max: 255 }).withMessage("Locations can be a maximum of 255 characters."),

  // target_pokemon: VARCHAR(16)
  body("target_pokemon")
    .optional()
    .isString().withMessage("Target Pokémon must be a string.")
    .isLength({ max: 16 }).withMessage("Target Pokémon can be a maximum of 16 characters."),

  // target_encounters: SMALLINT UNSIGNED
  body("target_encounters")
    .optional()
    .isInt({ min: 0, max: 65535 }).withMessage("Target encounters must be a positive integer (0-65535)."),

  // date_created: DATE
  body("date_created")
    .optional()
    .isISO8601().withMessage("Date created must be a valid date (YYYY-MM-DD)."),

  // date_updated: DATE
  body("date_updated")
    .optional()
    .isISO8601().withMessage("Date updated must be a valid date (YYYY-MM-DD)."),

  // is_active: BOOLEAN
  body("is_active")
    .optional()
    .isBoolean().withMessage("Is active must be a boolean (true/false)."),

  // time_update: DATETIME
  body("time_update")
    .optional()
    .isISO8601().withMessage("Time update must be a valid datetime (YYYY-MM-DD HH:mm:ss)."),
];

module.exports = shinyHuntValidationRules;