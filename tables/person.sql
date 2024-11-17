-- Create the table
CREATE TABLE person (
    person_id SMALLINT UNSIGNED AUTO_INCREMENT,
    fname VARCHAR(20),
    lname VARCHAR(20),
    email VARCHAR(40),
    dob DATE,
    date_created DATE,
    date_updated DATE,
    time_update DATETIME,
    is_active BOOLEAN,
    CONSTRAINT pk_person PRIMARY KEY (person_id)
);

-- Set default value for the date_created column
ALTER TABLE person MODIFY date_created DATE DEFAULT (CURDATE());

-- Set default value for the date_updated column
ALTER TABLE person MODIFY date_updated DATE DEFAULT (CURDATE());

-- Set default value for the is_active column
ALTER TABLE person MODIFY is_active BOOLEAN DEFAULT 0;

-- Adding a last_update column to store the timestamp of the last update (would have to be triggered via a SQL trigger or an API call)
ALTER TABLE person MODIFY time_update DATETIME DEFAULT (CURRENT_TIMESTAMP());

-- Adding a username and password column to the person table
ALTER TABLE person ADD username VARCHAR(20);
ALTER TABLE person ADD pw VARCHAR(255);
