
/*
 * Practice > Interview Preparation Kit > Greedy Algorithms > Max Min
 * https://www.hackerrank.com/challenges/angry-children/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    let n = Number(input[0])
    let k = Number(input[1])
    let arr = input.slice(2, 2+n).map(Number)
    process.stdout.write(maxMin(k, arr) + '\n')
})

// --- SOLUTION BELOW --- //

function maxMin (k, arr) {
    arr.sort((a,b) => b-a)
    let unfairness = []
    for (let i = 0, l = arr.length-k; i <= l; i++) unfairness.push(arr[i] - arr[i+k-1])
    return Math.min(...unfairness)
}
