
/*
 * Practice > SQL > Basic Join > Challenges
 * https://www.hackerrank.com/challenges/challenges/problem
 */

SELECT h.Hacker_ID, h.Name, COUNT(c.Challenge_ID) AS Total
FROM Hackers h
INNER JOIN Challenges c ON c.Hacker_ID = h.Hacker_ID
GROUP BY h.Hacker_ID, h.Name
HAVING
    Total = (SELECT COUNT(Challenge_ID) AS Max
                        FROM Challenges
                        GROUP BY Hacker_ID
                        ORDER BY Max DESC
                        LIMIT 1) OR
    Total IN (SELECT DISTINCT Temp_Total AS Distinct_Total
              FROM (SELECT th.Hacker_ID, th.Name, COUNT(tc.Challenge_ID) AS Temp_Total
                    FROM Hackers th
                    INNER JOIN Challenges tc ON tc.Hacker_ID = th.Hacker_ID
                    GROUP BY th.Hacker_ID, th.Name) Counts
              GROUP BY Temp_Total
              HAVING COUNT(Temp_Total) = 1)
ORDER BY Total DESC, h.Hacker_ID
