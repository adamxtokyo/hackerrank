
/*
 * Practice > SQL > Basic Join > Top Competitors
 * https://www.hackerrank.com/challenges/full-score/problem
 */

SELECT h.Hacker_ID, h.Name
FROM Hackers h
INNER JOIN Submissions s ON s.Hacker_ID = h.Hacker_ID
INNER JOIN Challenges c ON c.Challenge_ID = s.Challenge_ID
INNER JOIN Difficulty d ON d.Difficulty_Level = c.Difficulty_Level
WHERE d.Score = s.Score
GROUP BY h.Hacker_ID, h.Name
HAVING COUNT(s.Submission_ID) > 1
ORDER BY COUNT(s.Submission_ID) DESC, h.Hacker_ID ASC
