
/*
 * Practice > Algorithms > Strings > Alternating Characters
 * https://www.hackerrank.com/challenges/alternating-characters/problem
 */

const alternatingCharacters = s => [...s].reduce( (acc, c, id) => acc += c === s[id+1] ? 1 : 0, 0 )
