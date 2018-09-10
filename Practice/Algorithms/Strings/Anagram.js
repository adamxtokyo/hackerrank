
/*
 * Practice > Algorithms > Strings > Anagram
 * https://www.hackerrank.com/challenges/making-anagrams/problem
 */

function anagram (s) {

    if (s.length % 2 > 0) return -1

    let s1 = s.slice(0, s.length / 2)
    let s2 = s.slice(s.length / 2)
    let c = new Array(26).fill(0)

    for (let i = 0, l = s1.length; i < l; i++) {
        c[s1[i].charCodeAt(0) - 97]++
        c[s2[i].charCodeAt(0) - 97]--
    }

    return c.reduce( (acc, val) => acc += Math.abs(val), 0 ) / 2
}
