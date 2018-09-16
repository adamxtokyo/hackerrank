
/*
 * Practice > Algorithms > Sorting > Find the Median
 * https://www.hackerrank.com/challenges/find-the-median/problem
 */

const findMedian = arr => arr.sort((a,b) => a-b)[Math.floor(arr.length/2)]
