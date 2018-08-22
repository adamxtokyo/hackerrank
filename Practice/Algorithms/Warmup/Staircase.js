
/*
 * Practice > Algorithms > Warmup > Staircase
 * https://www.hackerrank.com/challenges/staircase/problem
 */

function staircase (n) {
    for (let i = 0, str = '#'; i < n; i++, str += '#') {
        console.log(str.padStart(n, ' '))
    }
}
