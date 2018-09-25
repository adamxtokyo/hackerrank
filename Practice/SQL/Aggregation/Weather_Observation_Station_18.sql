
/*
 * Practice > SQL > Aggregation > Weather Observation Station 18
 * https://www.hackerrank.com/challenges/weather-observation-station-18/problem
 */

SELECT ROUND(MAX(Lat_N) - MIN(Lat_N) + MAX(Long_W) - MIN(Long_W), 4)
FROM Station
