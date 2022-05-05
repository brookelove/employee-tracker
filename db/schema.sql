-- where the database exists and where it lies 
-- where I will make my tables
/* PSEUDOCODE 
1. need ot have an overall database 
2. three seperate tables that will rely on each other 
3. each has their own parameters 
*/
-- deletes and creates a database incorperated 
DROP DATABASE IF EXISTS incorperated_db;
CREATE DATABASE incorperated_db;

-- use this database for these tables 
USE incorperated_db;

-- creates first table of department with parameters 
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    name VARCHAR(30) NOT NULL
);

-- creates the second table it does rely on the first table for the department id 
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fk_department
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- creates the third table it does rely on the second table for the department id 
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_roles
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);

-- SHOW TABLES