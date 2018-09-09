
/*
 * Practice > Algorithms > Strings > The Love-Letter Mystery
 * https://www.hackerrank.com/challenges/the-love-letter-mystery/problem
 */

function theLoveLetterMystery (s) {
    let o = 0
    for (let i = Math.floor(s.length / 2)-1, j = Math.ceil(s.length / 2); i >= 0; i--, j++) {
        o += Math.abs(s[i].charCodeAt(0) - s[j].charCodeAt(0))
    }
    return o
}
