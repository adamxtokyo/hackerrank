
/*
 * Practice > SQL > Basic Select > Weather Observation Station 4
 * https://www.hackerrank.com/challenges/weather-observation-station-4/problem
 */

SELECT COUNT(city) - COUNT(DISTINCT city)
FROM STATION
