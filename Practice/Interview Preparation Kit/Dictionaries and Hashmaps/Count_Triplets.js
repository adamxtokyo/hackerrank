
/*
 * Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Count Triplets
 * https://www.hackerrank.com/challenges/count-triplets-1/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    let [n, r] = input[0].split(' ').map(Number)
    let arr = input[1].split(' ').map(Number)
    process.stdout.write(countTriplets(arr, r) + '\n')
})

// --- SOLUTION BELOW --- //

function countTriplets (arr, r) {

    let left = []
    let right = []
    arr.forEach(v => right[v] ? right[v]++ : right[v] = 1)

    let triplets = 0
    for (let i = 0, l = arr.length; i < l; i++) {
        right[arr[i]]--
        triplets += (left[arr[i]/r] || 0) * (right[arr[i]*r] || 0)
        left[arr[i]] ? left[arr[i]]++ : left[arr[i]] = 1
    }

    return triplets
}
