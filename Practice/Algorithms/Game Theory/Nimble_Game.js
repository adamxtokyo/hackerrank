
/*
 * Practice > Algorithms > Game Theory > Nimble Game
 * https://www.hackerrank.com/challenges/nimble-game-1/problem
 */

const nimbleGame = c => c.reduce((a,v,i) => v % 2 > 0 ? a^i : a, 0) > 0 ? 'First' : 'Second'
