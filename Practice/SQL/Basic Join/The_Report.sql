
/*
 * Practice > SQL > Basic Join > The Report
 * https://www.hackerrank.com/challenges/the-report/problem
 */

SELECT IF(g.Grade >= 8, s.Name, 'NULL'), g.Grade, s.Marks
FROM Students s
INNER JOIN Grades g ON s.Marks BETWEEN g.Min_Mark AND g.Max_Mark
ORDER BY g.Grade DESC, s.Name ASC, s.Marks ASC
