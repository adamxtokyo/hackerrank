
/*
 * Practice > Algorithms > Bit Manipulation > Flipping bits
 * https://www.hackerrank.com/challenges/flipping-bits/problem
 */

const flippingBits = n => parseInt(n.toString(2).padStart(32, '0').split('').map(x => 1>>x).join(''), 2)
