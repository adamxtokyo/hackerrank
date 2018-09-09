
/*
 * Practice > Algorithms > Strings > Beautiful Binary String
 * https://www.hackerrank.com/challenges/beautiful-binary-string/problem
 */

const beautifulBinaryString = b => (b.match(/010/g) || '').length
