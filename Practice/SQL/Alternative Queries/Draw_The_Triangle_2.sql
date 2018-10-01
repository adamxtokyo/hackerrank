
/*
 * Practice > SQL > Alternative Queries > Draw The Triangle 2
 * https://www.hackerrank.com/challenges/draw-the-triangle-2/problem
 */

SET @r = 0;

SELECT REPEAT('* ', @r := @r + 1)
FROM information_schema.tables
LIMIT 20;
