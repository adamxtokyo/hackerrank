
/*
 * Practice > Algorithms > Strings > Gemstones
 * https://www.hackerrank.com/challenges/gem-stones/problem
 */

const gemstones = arr => new Set( arr.reduce( (g, r) => g.filter( x => r.indexOf(x) > -1 ), [...arr[0]]) ).size
