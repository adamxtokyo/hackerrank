
/*
 * Practice > Interview Preparation Kit > Arrays > Minimum Swaps 2
 * https://www.hackerrank.com/challenges/minimum-swaps-2/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    let n = Number(input[0])
    let arr = input[1].split(' ').map(x => Number(x))
    process.stdout.write(minimumSwaps(n, arr) + '\n')
})

// --- SOLUTION BELOW --- //

function minimumSwaps (n, arr) {
    let swaps = 0
    for (let i = 0, l = Math.max(...arr); i < l; i++) {
        while (arr[i] !== i + 1) {
            arr[i] = [arr[arr[i]-1], arr[arr[i]-1] = arr[i]][0]
            if (!arr[i]) break
            swaps++
        }
    }
    return swaps
}
