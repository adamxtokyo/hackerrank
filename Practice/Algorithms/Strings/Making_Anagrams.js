
/*
 * Practice > Algorithms > Strings > Making Anagrams
 * https://www.hackerrank.com/challenges/making-anagrams/problem
 */

function makingAnagrams (s1, s2) {

    let c = new Array(26).fill(0)

    for (let i = 0, l = Math.max(s1.length, s2.length); i < l; i++) {
        if (s1[i]) c[s1[i].charCodeAt(0) - 97]++
        if (s2[i]) c[s2[i].charCodeAt(0) - 97]--
    }

    return c.reduce( (acc, val) => acc += Math.abs(val), 0 )
}
