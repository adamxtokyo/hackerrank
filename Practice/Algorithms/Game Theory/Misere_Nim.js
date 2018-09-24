
/*
 * Practice > Algorithms > Game Theory > Misère Nim
 * https://www.hackerrank.com/challenges/misere-nim-1/problem
 */

function misereNim (s) {
    if (s.every(x => x === 1)) return s.length % 2 === 0 ? 'First' : 'Second'
    return s.reduce((a,v) => a^v, 0) > 0 ? 'First' : 'Second'
}
