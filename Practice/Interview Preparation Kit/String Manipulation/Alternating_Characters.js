
/*
 * Practice > Interview Preparation Kit > String Manipulation > Alternating Characters
 * https://www.hackerrank.com/challenges/alternating-characters/problem
 */

const alternatingCharacters = s => [...s].reduce( (a,v,i) => a += v === s[i+1], 0 )
