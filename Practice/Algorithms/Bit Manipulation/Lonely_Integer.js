
/*
 * Practice > Algorithms > Bit Manipulation > Lonely Integer
 * https://www.hackerrank.com/challenges/lonely-integer/problem
 */

const lonelyinteger = a => a.reduce((a,v) => a^v, 0)
