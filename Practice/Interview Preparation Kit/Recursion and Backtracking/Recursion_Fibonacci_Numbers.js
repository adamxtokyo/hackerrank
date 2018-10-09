
/*
 * Practice > Interview Preparation Kit > Recursion and Backtracking > Recursion: Fibonacci Numbers
 * https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    let n = Number(input[0])
    console.log(fibonacci(n))
})

// --- SOLUTION BELOW --- //

function fibonacci (n, i = 2, f1 = 0, f2 = 1) {
    if (n < 2) return n
    return n > i ? fibonacci(n, ++i, f2, f1+f2) : f1+f2
}
