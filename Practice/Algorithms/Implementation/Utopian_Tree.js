
/*
 * Practice > Algorithms > Implementation > Utopian Tree
 * https://www.hackerrank.com/challenges/utopian-tree/problem
 */

const utopianTree = n => new Uint8Array(n + 1).reduce((height, x, cycle) => cycle % 2 > 0 ? height * 2 : ++height, 0)
