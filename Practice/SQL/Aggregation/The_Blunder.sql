
/*
 * Practice > SQL > Aggregation > The Blunder
 * https://www.hackerrank.com/challenges/the-blunder/problem
 */

SELECT CEIL(AVG(Salary) - AVG(REPLACE(Salary, 0, '')))
FROM Employees
