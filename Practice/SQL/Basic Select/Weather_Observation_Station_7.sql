
/*
 * Practice > SQL > Basic Select > Weather Observation Station 7
 * https://www.hackerrank.com/challenges/weather-observation-station-7/problem
 */

SELECT DISTINCT city
FROM station
WHERE city REGEXP '[aiueo]$';
