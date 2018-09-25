
/*
 * Practice > SQL > Aggregation > Weather Observation Station 17
 * https://www.hackerrank.com/challenges/weather-observation-station-17/problem
 */

SELECT ROUND(Long_W, 4)
FROM Station
WHERE Lat_N > 38.7780
ORDER BY Lat_N
LIMIT 1
