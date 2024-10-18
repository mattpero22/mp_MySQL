-- Create the table
CREATE TABLE person (
    person_id SMALLINT UNSIGNED AUTO_INCREMENT,
    fname VARCHAR(20),
    lname VARCHAR(20),
    email VARCHAR(40),
    dob DATE,
    date_created DATE,
    date_updated DATE,
    is_active BOOLEAN,
    CONSTRAINT pk_person PRIMARY KEY (person_id)
);

-- Set default value for the date_created column
ALTER TABLE person MODIFY date_created DATE DEFAULT (CURDATE());

-- Set default value for the date_updated column
ALTER TABLE person MODIFY date_updated DATE DEFAULT (CURDATE());
