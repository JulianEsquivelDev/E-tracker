INSERT INTO departments (department_name, department_id)
VALUES
('Marketing', 1),
('Accounting', 2),
('Production', 3),
('Human Resource Managment', 4);

INSERT INTO roles (job_name, role_id, wage)
VALUES
('Content Marketing', 0001, 70000),
('Marketing Research', 0002, 68000),
('Bookkeeping', 0003, 83000),
('Budget Analyst', 0004, 90000),
('Shift Supervisor', 0005, 65000),
('Recruiter', 0006, 51000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Ashley', 'Gonzalez', 0001, 1),
('Kortney', 'Stace', 0002, null),
('Jamey', 'Bree', 0003, 1),
('Alex', 'Vale', 0004, 2),
('Matthew', 'Houston', 0005, 1),
('Maria', 'Farrell', 0006, 3);
