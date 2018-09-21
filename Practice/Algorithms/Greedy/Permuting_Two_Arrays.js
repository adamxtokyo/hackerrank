
/*
 * Practice > Algorithms > Greedy > Permuting Two Arrays
 * https://www.hackerrank.com/challenges/two-arrays/problem
 */

function twoArrays (k, a, b) {
    a.sort((a,b) => a-b)
    b.sort((a,b) => b-a)
    return a.every((v,i) => v + b[i] >= k) ? 'YES' : 'NO'
}
