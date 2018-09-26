
/*
 * Practice > SQL > Basic Join > African Cities
 * https://www.hackerrank.com/challenges/african-cities/problem
 */

SELECT City.Name
FROM City
INNER JOIN Country ON City.CountryCode = Country.Code
WHERE Country.Continent = 'Africa'
ORDER BY City.Name ASC
