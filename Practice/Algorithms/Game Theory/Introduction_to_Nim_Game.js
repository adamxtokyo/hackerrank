
/*
 * Practice > Algorithms > Game Theory > Introduction to Nim Game
 * https://www.hackerrank.com/challenges/nim-game-1/problem
 */

const nimGame = pile => pile.reduce((a,v) => a^v, 0) > 0 ? 'First' : 'Second'
