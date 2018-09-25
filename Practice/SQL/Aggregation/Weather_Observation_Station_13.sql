
/*
 * Practice > SQL > Aggregation > Weather Observation Station 13
 * https://www.hackerrank.com/challenges/weather-observation-station-13/problem
 */

SELECT ROUND(SUM(Lat_N), 4)
FROM Station
WHERE
    Lat_N > 38.7880 AND
    Lat_N < 137.2345
