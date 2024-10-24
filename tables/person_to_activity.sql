-- Create the table
CREATE TABLE person_to_activity (
    p2a_id SMALLINT UNSIGNED AUTO_INCREMENT,
    person_id SMALLINT UNSIGNED,
    activity_id SMALLINT UNSIGNED,
    activity_hours FLOAT(2),
    notes VARCHAR(1024),
    date_created DATE,
    date_updated DATE,
    is_active BOOLEAN,
    time_update DATETIME,
    CONSTRAINT pk_p2a PRIMARY KEY (p2a_id),
    CONSTRAINT fk_person_id FOREIGN KEY (person_id) REFERENCES person (person_id),
    CONSTRAINT fk_activity_id FOREIGN KEY (activity_id) REFERENCES activity (activity_id) 
);

-- Set default value for the date_created column
ALTER TABLE person_to_activity MODIFY date_created DATE DEFAULT (CURDATE());

-- Set default value for the date_updated column
ALTER TABLE person_to_activity MODIFY date_updated DATE DEFAULT (CURDATE());

-- Set default value for the is_active column
ALTER TABLE person_to_activity MODIFY is_active BOOLEAN DEFAULT 1;

-- Set default value for the date_updated column
ALTER TABLE person_to_activity MODIFY time_update DATETIME DEFAULT (CURRENT_TIMESTAMP());

-- First entry into mp's activity mapping table, beginning on 10/24/2024
INSERT INTO person_to_activity (person_id, activity_id, activity_hours, notes)
VALUES (1, 1, 1.25, 'set up the activity and person_to_activity tables for this database. Will be used to track the time spent on various activities, which will be added to the activity table.');

SELECT p2a_id, person_id, activity_id, activity_hours FROM person_to_activity;