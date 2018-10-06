
/*
 * Practice > Interview Preparation Kit > Arrays > Arrays: Left Rotation
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    let [n, d] = input[0].split(' ').map(Number)
    let a = input[1].split(' ').map(Number)
    process.stdout.write(rotLeft(a, d).join(' ') + '\n')
})

// --- SOLUTION BELOW --- //

function rotLeft (a, d) {
    return [...a.slice(d), ...a.slice(0, d)]
}
