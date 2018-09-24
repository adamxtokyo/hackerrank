
/*
 * Practice > Algorithms > Game Theory > Poker Nim
 * https://www.hackerrank.com/challenges/poker-nim-1/problem
 */

// Same as for regular Nim (the inclusion of k doesn't make a difference)
const pokerNim = (k, c) => c.reduce((a,v) => a^v, 0) > 0 ? 'First' : 'Second'
