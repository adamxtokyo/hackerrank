
/*
 * Practice > SQL > Basic Select > Weather Observation Station 5
 * https://www.hackerrank.com/challenges/weather-observation-station-5/problem
 */

SELECT city, CHAR_LENGTH(city)
FROM STATION
ORDER BY CHAR_LENGTH(city) ASC, city ASC
LIMIT 1;

SELECT city, CHAR_LENGTH(city)
FROM STATION
ORDER BY CHAR_LENGTH(city) DESC, city ASC
LIMIT 1;
