
/*
 * Practice > Algorithms > Implementation > Halloween Sale
 * https://www.hackerrank.com/challenges/halloween-sale/problem
 */

function howManyGames (p, d, m, s) {
    let r = 0
    while (s >= p) [s, p, r] = [s-p, (p-d) > m ? p-d : m, r+1]
    return r
}
