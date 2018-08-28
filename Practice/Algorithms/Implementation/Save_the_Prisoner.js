
/*
 * Practice > Algorithms > Implementation > Save the Prisoner!
 * https://www.hackerrank.com/challenges/save-the-prisoner/problem
 */

const saveThePrisoner = (n, m, s) => (--s + m) % n === 0 ? n : (s + m) % n
