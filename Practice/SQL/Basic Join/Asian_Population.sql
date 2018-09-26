
/*
 * Practice > SQL > Basic Join > Asian Population
 * https://www.hackerrank.com/challenges/asian-population/problem
 */

SELECT SUM(City.Population)
FROM City
INNER JOIN Country ON City.CountryCode = Country.Code
WHERE Country.Continent = 'Asia'
