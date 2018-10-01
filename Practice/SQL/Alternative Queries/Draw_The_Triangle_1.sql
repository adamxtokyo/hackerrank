
/*
 * Practice > SQL > Alternative Queries > Draw The Triangle 1
 * https://www.hackerrank.com/challenges/draw-the-triangle-1/problem
 */

SET @r = 21;

SELECT REPEAT('* ', @r := @r - 1)
FROM information_schema.tables;
