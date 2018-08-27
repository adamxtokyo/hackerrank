
/*
 * Practice > Algorithms > Implementation > The Hurdle Race
 * https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */

const hurdleRace = (k, height) => Math.max(...height) > k ? Math.max(...height) - k : 0
