
/*
 * Practice > SQL > Aggregation > Weather Observation Station 15
 * https://www.hackerrank.com/challenges/weather-observation-station-15/problem
 */

SELECT ROUND(Long_W, 4)
FROM Station
WHERE Lat_N < 137.2345
ORDER BY Lat_N DESC
LIMIT 1
