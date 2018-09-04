
/*
 * Practice > Algorithms > Strings > HackerRank in a String!
 * https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
 */

function hackerrankInString (s) {
    let h = 'hackerrank'
    for (let si = 0, hi = 0, sl = s.length, hl = h.length; si < sl; si++) {
        if (s[si] === h[hi]) hi++
        if (hi === hl) return 'YES'
    }
    return 'NO'
}
