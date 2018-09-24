
/*
 * Practice > SQL > Basic Select > Weather Observation Station 6
 * https://www.hackerrank.com/challenges/weather-observation-station-6/problem
 */

SELECT DISTINCT city
FROM station
WHERE city REGEXP '^[aiueo]';