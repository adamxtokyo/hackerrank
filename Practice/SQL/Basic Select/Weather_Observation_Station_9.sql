
/*
 * Practice > SQL > Basic Select > Weather Observation Station 9
 * https://www.hackerrank.com/challenges/weather-observation-station-9/problem
 */

SELECT DISTINCT city
FROM station
WHERE city REGEXP '^[^aiueo]'
ORDER BY city ASC;
