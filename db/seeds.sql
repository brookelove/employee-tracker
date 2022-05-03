-- this is to input some people into the database for the future 
USE incorperated_db;
-- for the department
INSERT INTO department (name)
VALUES ("Mystery");

-- for the roles 
INSERT INTO roles (title, salary, department_id)
VALUES ("Leader", 30, 1),
       ("Damsel", 60, 1),
       ("The Brains", 80, 1),
       ("Bait", 50, 1),
       ("Villan", 300, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Fred", "Jones", 1, NULL),
       ("Daphne", "Blake", 2, 1 ),
       ("Velma", "Dinkley", 3, 1 ),
       ("Norville", "Rogers", 4, 1 ),
       ("Scoobert", "Doobert", 4, 1 ),
       ("The", "Creeper", 5, NULL);