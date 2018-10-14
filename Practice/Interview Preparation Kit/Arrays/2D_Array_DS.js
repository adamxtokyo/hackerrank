
/*
 * Practice > Interview Preparation Kit > Arrays > 2D Array - DS
 * https://www.hackerrank.com/challenges/2d-array/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let arr =  input_stdin.split('\n').map(r => r.split(' ').map(Number))
    process.stdout.write(hourglassSum(arr) + '\n')
})

// --- SOLUTION BELOW --- //

function hourglassSum (a) {
    let sums = []
    for (let r = 2; r < 6; r++) {
        for (let c = 2; c < 6; c++) {
            sums.push(a[r-2][c-2] + a[r-2][c-1] + a[r-2][c] + a[r-1][c-1] + a[r][c-2] + a[r][c-1] + a[r][c])
        }
    }
    return Math.max(...sums)
}
