
/*
 * Practice > Algorithms > Implementation > Birthday Chocolate
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem
 */

function birthday (s, d, m) {
    let result = 0
    for (let i = 0, l = s.length - m; i <= l; i++) {
        if (s.slice(i, i + m).reduce((acc, val) => acc + val, 0) === d) ++result
    }
    return result
}
