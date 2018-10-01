
/*
 * Practice > SQL > Advanced Join > Symmetric Pairs
 * https://www.hackerrank.com/challenges/symmetric-pairs/problem
 */

SELECT DISTINCT f1.x, f1.y
FROM Functions f1
INNER JOIN Functions f2 ON
    f1.x = f2.y AND
    f2.x = f1.y AND
    f1.x < f1.y

UNION

SELECT x, y
FROM Functions
WHERE x = y
GROUP BY x, y
HAVING COUNT(*) > 1

ORDER BY x, y;
