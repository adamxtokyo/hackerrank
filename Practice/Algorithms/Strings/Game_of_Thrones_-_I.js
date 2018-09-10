
/*
 * Practice > Algorithms > Strings > Game of Thrones - I
 * https://www.hackerrank.com/challenges/game-of-thrones/problem
 */

function gameOfThrones (s) {
    let p = new Array(26).fill(0)
    for (let i = 0, l = s.length; i < l; i++) p[s[i].charCodeAt(0) - 97] = p[s[i].charCodeAt(0) - 97] ^ 1
    return p.reduce( (acc, v) => acc += v, 0 ) > 1 ? 'NO' : 'YES'
}
