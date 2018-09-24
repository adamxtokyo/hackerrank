
/*
 * Practice > SQL > Aggregation > Top Earners
 * https://www.hackerrank.com/challenges/earnings-of-employees/problem
 */

SELECT
    Salary * Months AS MTE,
    COUNT(*)
FROM Employee
GROUP BY MTE DESC
LIMIT 1
