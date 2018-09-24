
/*
 * Practice > SQL > Basic Select > Weather Observation Station 12
 * https://www.hackerrank.com/challenges/weather-observation-station-12/problem
 */

SELECT DISTINCT city
FROM station
WHERE city REGEXP '^[^aiueo].*[^aiueo]$'
ORDER BY city ASC;
