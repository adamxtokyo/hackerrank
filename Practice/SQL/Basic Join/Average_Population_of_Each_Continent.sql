
/*
 * Practice > SQL > Basic Join > Average Population of Each Continent
 * https://www.hackerrank.com/challenges/average-population-of-each-continent/problem
 */

SELECT Country.Continent, FLOOR(AVG(City.Population))
FROM Country
INNER JOIN City ON City.CountryCode = Country.Code
GROUP BY Country.Continent ASC
