
/*
 * Practice > SQL > Basic Join > Ollivander's Inventory
 * https://www.hackerrank.com/challenges/harry-potter-and-wands/problem
 */

SELECT w.ID, wp.Age, w.Coins_Needed, w.Power
FROM Wands w
INNER JOIN Wands_Property wp ON wp.Code = w.Code
WHERE
    wp.Is_Evil = 0 AND
    w.Coins_Needed = (SELECT MIN(Coins_Needed) FROM Wands
                      INNER JOIN Wands_Property ON Wands_Property.Code = Wands.Code
                      WHERE  Wands_Property.Age = wp.Age AND Wands.Power = w.Power)
ORDER BY w.Power DESC, wp.Age DESC
