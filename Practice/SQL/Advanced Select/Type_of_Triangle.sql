
/*
 * Practice > SQL > Advanced Select > Type of Triangle
 * https://www.hackerrank.com/challenges/what-type-of-triangle/problem
 */

SELECT
    CASE WHEN a + b > c AND b + c > a AND c + a > b THEN
        CASE WHEN a = b AND b = c THEN 'Equilateral'
        WHEN a = b OR b = c OR c = a THEN 'Isosceles'
        ELSE 'Scalene' END
    ELSE 'Not A Triangle' END
FROM triangles
