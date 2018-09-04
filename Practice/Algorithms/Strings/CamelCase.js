
/*
 * Practice > Algorithms > Strings > CamelCase
 * https://www.hackerrank.com/challenges/camelcase/problem
 */

const camelcase = s => s.split('').reduce( (r, c) => r += c === c.toUpperCase() ? 1 : 0, 1 )
