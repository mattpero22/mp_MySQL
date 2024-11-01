-- Create the table
CREATE TABLE activity (
    activity_id SMALLINT UNSIGNED AUTO_INCREMENT,
    activity_name VARCHAR(40),
    activity_description VARCHAR(255),
    activity_category ENUM('Chores', 'Study', 'Health', 'Cook', 'Relax'),
    date_created DATE,
    date_updated DATE,
    is_active BOOLEAN,
    time_update DATETIME,
    CONSTRAINT pk_activity PRIMARY KEY (activity_id)
);

-- Set default value for the date_created column
ALTER TABLE activity MODIFY date_created DATE DEFAULT (CURDATE());

-- Set default value for the date_updated column
ALTER TABLE activity MODIFY date_updated DATE DEFAULT (CURDATE());

-- Set default value for the is_active column
ALTER TABLE activity MODIFY is_active BOOLEAN DEFAULT 0;

-- Set default value for the date_updated column
ALTER TABLE activity MODIFY time_update DATETIME DEFAULT (CURRENT_TIMESTAMP());

-- adding a column for activity_date to allow user to upload activities at a later date, and to provide a day to link the action to for temporal data
ALTER TABLE activity ADD activity_date DATE DEFAULT(CURDATE());
