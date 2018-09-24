
/*
 * Practice > SQL > Basic Select > Employee Salaries
 * https://www.hackerrank.com/challenges/salary-of-employees/problem
 */

SELECT name
FROM employee
WHERE
    salary > 2000 AND
    months < 10
ORDER BY employee_id ASC
