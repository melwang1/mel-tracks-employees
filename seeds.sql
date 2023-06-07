INSERT INTO department (name);
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Service"),
       ("Legal");

INSERT INTO role (title, salary, department_id);
VALUES ("Sales Associate", 4500, 1),
       ("Sales Manager", 6500, 1);
       ("Software Engineer", 10000, 2),
       ("Junior Engineer", 6000, 2),
       ("Civil Engineer", 8500, 2),
       ("Financial Advisor", 7500, 3);
       ("Finance Accountant", 7700, 3),
       ("Customer Service", 5500, 4),
       ("Call Centre", 5000, 4),
       ("Lawyer", 9500, 5),
       ("Paralegal", 8800, 5),
       ("Legal Team Lead", 7900, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id);
VALUES ("Kyle", "Lee", 5, 3),
       ("John", "Doe", 8, 9),
       ("Anna", "Foster", 1, NULL),
       ("Jessica", "Baker", 12, 2),
       ("Christian", "Bell", 4, NULL),
       ("Corey", "Wong", 11, 3),
       ("Ally", "White", 2, 5),
       ("Oliver", "Banks", 12, 3),
       ("Hayden", "Nguyen", 3, 3),
       ("Richard", "Wu", 6, 4),
       ("Corrina", "Timbol", 7, 4);