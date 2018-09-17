
/*
 * Practice > Algorithms > Greedy > Minimum Absolute Difference in an Array
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
 */

function minimumAbsoluteDifference (arr) {
    arr.sort((a,b) => a-b)
    return arr.reduce((min, v, i) => Math.min(Math.abs(v - (arr[i+1] || Infinity)), min), Infinity)
}
