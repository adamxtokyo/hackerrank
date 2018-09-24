
/*
 * Practice > SQL > Basic Select > Weather Observation Station 10
 * https://www.hackerrank.com/challenges/weather-observation-station-10/problem
 */

SELECT DISTINCT city
FROM station
WHERE city REGEXP '[^aiueo]$'
ORDER BY city ASC;
