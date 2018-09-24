
/*
 * Practice > SQL > Basic Select > Higher Than 75 Marks
 * https://www.hackerrank.com/challenges/more-than-75-marks/problem
 */

SELECT name
FROM students
WHERE marks > 75
ORDER BY SUBSTRING(name, -3), id ASC
