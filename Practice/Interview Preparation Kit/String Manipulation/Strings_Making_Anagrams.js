
/*
 * Practice > Interview Preparation Kit > String Manipulation > Strings: Making Anagrams
 * https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
 */

function makeAnagram (a, b) {
    let index = new Array(27).fill(0)
    for (let i = 0, l = Math.max(a.length, b.length); i < l; i++) {
        index[a.charCodeAt(i)-97]++
        index[b.charCodeAt(i)-97]--
    }
    return index.reduce((a,v) => a += Math.abs(v), 0)
}
