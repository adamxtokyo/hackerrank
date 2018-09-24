
/*
 * Practice > SQL > Advanced Select > Binary Tree Nodes
 * https://www.hackerrank.com/challenges/binary-search-tree-1/problem
 */

SELECT
    n,
    IF(p IS NULL, 'Root',
        IF((SELECT COUNT(*) FROM BST WHERE p = Temp.n) > 0, 'Inner', 'Leaf'))
FROM BST AS Temp
ORDER BY n ASC;
