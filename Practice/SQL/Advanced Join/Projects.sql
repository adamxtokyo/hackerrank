
/*
 * Practice > SQL > Advanced Join > Projects
 * https://www.hackerrank.com/challenges/projects/problem
 */

SET @r = 0;

SELECT p.Project_Start, p.Project_End
FROM (SELECT MIN(t.Start_Date) AS Project_Start, MAX(t.End_Date) AS Project_End
      FROM (SELECT TO_DAYS(Start_Date) - (@r := @r + 1) AS Group_ID, Start_Date, End_Date
            FROM Projects
            ORDER BY Start_Date) AS t
      GROUP BY t.Group_ID) AS p
ORDER BY DATEDIFF(p.Project_End, p.Project_Start), p.Project_Start
