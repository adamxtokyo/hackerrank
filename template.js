
/*
 * PATH (e.g. Practice > Algorithms > Strings > String Problem 1)
 * URL (e.g. https://www.hackerrank.com/challenges/string-problem-1/problem)
 */

// const BigNumber = require('bignumber.js')

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const input = stdin.split('\n')

    const n = Number(input[0])
    const arr = input.slice(1, n + 1)

    const result = solution(n, arr)
    process.stdout.write(result)
})

// --- SOLUTION BELOW --- //

function solution (n, arr) {
    return { n, arr }
}
