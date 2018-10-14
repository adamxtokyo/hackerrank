
/*
 * PATH (e.g. Practice > Algorithms > Strings > String Problem 1)
 * URL (e.g. https://www.hackerrank.com/challenges/string-problem-1/problem)
 */

'use strict'

const BigNumber = require('bignumber.js')

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')

    let n = Number(input[0])
    let arr = input[1].split(' ').map(Number)

    let result = solution(n, arr)
    process.stdout.write(result)
})

// --- SOLUTION BELOW --- //

function solution (n, arr) {
}
