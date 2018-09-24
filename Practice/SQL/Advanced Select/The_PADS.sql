
/*
 * Practice > SQL > Advanced Select > The PADS
 * https://www.hackerrank.com/challenges/the-pads/problem
 */

SELECT CONCAT(name, '(', SUBSTRING(occupation, 1, 1), ')')
FROM occupations
ORDER BY name ASC;

SELECT CONCAT('There are a total of ', COUNT(occupation), ' ', LOWER(occupation), 's.')
FROM occupations
GROUP BY occupation
ORDER BY COUNT(occupation) ASC;
