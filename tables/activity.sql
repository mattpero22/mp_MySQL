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

-- Manual inserts for activity types
INSERT INTO activity (activity_name, activity_description, activity_category)
VALUES
    ('Programming', 'writing code, working on personal projects, studying coding languages', 'Study'),
    ('Job Applications', 'applying to jobs, networking, working on interviews and interview material', 'Study'),
    ('Video Games', 'playing video games for fun', 'Relax'),
    ('Meditation', 'deliberate time taken to breathe, listen to my body, and reset', 'Health'),
    ('Cook', 'making a meal to be eaten immediately', 'Cook'),
    ('Meal Prep', 'preparing a large meal to be eaten over the next week', 'Cook'),
    ('Run', 'running or jogging for exercise', 'Health'),
    ('Walk', 'walking for exercise, to get outside, enjoy weather', 'Health'),
    ('Workout', 'set of exercises targeting muscle groups', 'Health'),
    ('Dishes', 'washing and drying dishes used for cooking', 'Chores'),
    ('Housekeeping', 'maintaining house, bathrooms, kitchen, vacuum, etc.', 'Chores'),
    ('Laundry', 'time spent washing, drying, and folding laundry', 'Chores'),
    ('Read', 'time spent reading a book for enjoyment', 'Relax'),
    ('Hike', 'going for a hike in the woods/ to go camping', 'Health');
