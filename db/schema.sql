DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30),
    department_id VARCHAR(30) 
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_name VARCHAR(30) NOT NULL,
    role_id INT,
    wage DECIMAL(7,2) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_name VARCHAR(30) NOT NULL,
    employee_wage DECIMAL(7,2) NOT NULL,
    manager_id INT NULL
);