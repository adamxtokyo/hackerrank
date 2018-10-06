
/*
 * Practice > Interview Preparation Kit > Greedy Algorithms > Minimum Absolute Difference in an Array
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    // let n = Number(input[0])
    let arr = input[1].split(' ').map(Number)
    process.stdout.write(minimumAbsoluteDifference(arr) + '\n')
})

// --- SOLUTION BELOW --- //

function minimumAbsoluteDifference (arr) {
    arr.sort((a,b) => a-b)
    return arr.reduce( (min_diff,v,i) => {
        let current_diff = Math.abs(v - (arr[i+1] || Infinity))
        return Math.min(current_diff, min_diff)
    }, Infinity)
}
