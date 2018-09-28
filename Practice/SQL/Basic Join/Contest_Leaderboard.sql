
/*
 * Practice > SQL > Basic Join > Contest Leaderboard
 * https://www.hackerrank.com/challenges/contest-leaderboard/problem
 */

SELECT h.Hacker_ID, h.Name, SUM(s.Score) AS Total_Score
FROM Hackers h
INNER JOIN (SELECT Hacker_ID, MAX(Score) AS Score
            FROM Submissions
            GROUP BY Hacker_ID, Challenge_ID) s ON s.Hacker_ID = h.Hacker_ID
GROUP BY h.Hacker_ID, h.Name
HAVING Total_Score > 0
ORDER BY Total_Score DESC, h.Hacker_ID
