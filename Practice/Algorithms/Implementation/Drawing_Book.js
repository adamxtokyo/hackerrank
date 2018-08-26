
/*
 * Practice > Algorithms > Implementation > Drawing Book
 * https://www.hackerrank.com/challenges/drawing-book/problem
 */

const pageCount = (n, p) => Math.min(Math.floor(p / 2), Math.ceil((n - n % 2) / 2 - p / 2))
