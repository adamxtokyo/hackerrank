
/*
 * Practice > Algorithms > Implementation > Find Digits
 * https://www.hackerrank.com/challenges/find-digits/problem
 */

const findDigits = n => n.toString().split('').reduce((acc, d) => n % Number(d) === 0 ? ++acc : acc, 0)
