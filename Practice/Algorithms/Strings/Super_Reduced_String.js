
/*
 * Practice > Algorithms > Strings > Super Reduced String
 * https://www.hackerrank.com/challenges/reduced-string/problem
 */

function superReducedString (s) {
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            s = s.slice(0, i-1) + s.slice(i+1)
            i = 0
        }
    }
    return s.length > 0 ? s : 'Empty String'
}
