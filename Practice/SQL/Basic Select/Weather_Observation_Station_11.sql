
/*
 * Practice > SQL > Basic Select > Weather Observation Station 11
 * https://www.hackerrank.com/challenges/weather-observation-station-11/problem
 */

SELECT DISTINCT city
FROM station
WHERE
    city REGEXP '^[^aiueo]' OR
    city REGEXP '[^aiueo]$'
ORDER BY city ASC;
