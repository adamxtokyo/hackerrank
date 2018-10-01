
/*
 * Practice > SQL > Advanced Join > Placements
 * https://www.hackerrank.com/challenges/placements/problem
 */

SELECT s.Name
FROM Students s
INNER JOIN Friends f ON f.ID = s.ID
INNER JOIN Packages sp ON sp.ID = s.ID
INNER JOIN Packages fp ON fp.ID = f.Friend_ID
WHERE sp.Salary < fp.Salary
ORDER BY fp.Salary
