-- Create the table
CREATE TABLE shiny_hunt (
    shiny_hunt_id SMALLINT UNSIGNED AUTO_INCREMENT,
    ot VARCHAR(8),
    game ENUM('Red', 'Blue', 'Yellow', 'Gold', 'Silver', 'Crystal', 'Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen', 'Diamond', 'Pearl', 'Platinum', 'HeartGold', 'SoulSilver', 'Black', 'White', 'Black 2', 'White 2'),
    shiny_hunt_date DATE DEFAULT(CURDATE()),
    num_encounters SMALLINT UNSIGNED,
    num_shiny SMALLINT UNSIGNED,
    locations VARCHAR(255),
    target_pokemon VARCHAR(16),
    target_encounters SMALLINT UNSIGNED,
    date_created DATE,
    date_updated DATE,
    is_active BOOLEAN,
    time_update DATETIME,
    CONSTRAINT pk_shiny_hunt PRIMARY KEY (shiny_hunt_id)
);


-- Set default value for the date_created column
ALTER TABLE shiny_hunt MODIFY date_created DATE DEFAULT (CURDATE());


-- Set default value for the date_updated column
ALTER TABLE shiny_hunt MODIFY date_updated DATE DEFAULT (CURDATE());


-- Set default value for the is_active column
ALTER TABLE shiny_hunt MODIFY is_active BOOLEAN DEFAULT 0;


-- Set default value for the date_updated column
ALTER TABLE shiny_hunt MODIFY time_update DATETIME DEFAULT (CURRENT_TIMESTAMP());


-- adding a column for shiny_hunt_date to allow user to upload activities at a later date, and to provide a day to link the action to for temporal data
ALTER TABLE shiny_hunt MODIFY shiny_hunt_date DATE DEFAULT(CURDATE());
