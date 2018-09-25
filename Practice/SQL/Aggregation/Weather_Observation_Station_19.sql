
/*
 * Practice > SQL > Aggregation > Weather Observation Station 19
 * https://www.hackerrank.com/challenges/weather-observation-station-19/problem
 */

SELECT ROUND(SQRT(POWER(MAX(Lat_N) - MIN(Lat_N), 2) + POWER(MAX(Long_W) - MIN(Long_W), 2)), 4)
FROM Station
