
/*
 * Practice > Algorithms > Implementation > Repeated String
 * https://www.hackerrank.com/challenges/repeated-string/problem
 */

const repeatedString = (s, n) => s.split('').filter(x => x === 'a').length * Math.floor(n / s.length) + s.slice(0, n % s.length).split('').filter(x => x === 'a').length
