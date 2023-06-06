DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(30)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    role_id INT,
    manager_id INT
);