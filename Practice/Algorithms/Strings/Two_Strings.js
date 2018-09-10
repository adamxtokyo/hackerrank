
/*
 * Practice > Algorithms > Strings > Two Strings
 * https://www.hackerrank.com/challenges/two-strings/problem
 */

function twoStrings (s1, s2) {
    let u1 = [...new Set(s1)]
    for (let i = 0, l = u1.length; i < l; i++) if (s2.indexOf(u1[i]) > -1) return 'YES'
    return 'NO'
}
