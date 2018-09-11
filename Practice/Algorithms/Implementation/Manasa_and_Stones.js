
/*
 * Practice > Algorithms > Implementation > Manasa and Stones
 * https://www.hackerrank.com/challenges/manasa-and-stones/problem
 */

const stones = (n,a,b) => [...new Set(new Array(n).fill(1).map((x,i) => a*i + b*(n-i-1)))].sort((a,b) => a-b)
