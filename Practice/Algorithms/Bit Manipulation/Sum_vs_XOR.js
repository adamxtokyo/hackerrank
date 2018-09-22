
/*
 * Practice > Algorithms > Bit Manipulation > Sum vs XOR
 * https://www.hackerrank.com/challenges/sum-vs-xor/problem
 */

const sumXor = n => n < 2 ? 1 : Math.pow(2, n.toString(2).match(/0/g).length)
