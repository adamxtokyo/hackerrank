
/*
 * Practice > Algorithms > Greedy > Sherlock and The Beast
 * https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem
 */

function decentNumber (n) {
    let x = n
    while (x % 3 > 0) x -= 5
    return x < 0 ? console.log('-1') : console.log('5'.repeat(x) + '3'.repeat(n - x))
}
