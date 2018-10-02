
/*
 * Practice > Interview Preparation Kit > Arrays > Array Manipulation
 * https://www.hackerrank.com/challenges/crush/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    let [n, m] = input[0].split(' ').map(Number)
    let queries = input.slice(1).map(x => x.split(' ').map(Number))
    process.stdout.write(arrayManipulation(n, queries) + '\n')
})

// --- SOLUTION BELOW --- //

function arrayManipulation(n, queries) {

    let arr = new Array(n+1).fill(0)

    queries.forEach(q => {
        arr[q[0]-1] += q[2]
        arr[q[1]] -= q[2]
    })

    let max = 0
    for (let i = 0, v = 0; i < n; i++) {
        v += arr[i]
        if (v > max) max = v
    }

    return max
}
