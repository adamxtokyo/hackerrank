
/*
 * Practice > Algorithms > Sorting > Quicksort 2 - Sorting
 * https://www.hackerrank.com/challenges/quicksort2/problem
 */

'use strict'

function quicksort (arr, n = arr.length) {
    if (n < 2) return arr
    let sorted = [ [], [arr[0]], [] ]
    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[0]) sorted[0].push(arr[i])
        else if (arr[i] === arr[0]) sorted[1].push(arr[i])
        else if (arr[i] > arr[0]) sorted[2].push(arr[i])
    }
    sorted[0] = quicksort(sorted[0], sorted[0].length)
    sorted[2] = quicksort(sorted[2], sorted[2].length)
    sorted = [...sorted[0], ...sorted[1], ...sorted[2]]
    console.log(sorted.join(' '))
    return sorted
}

let input = ''
process.stdin.resume()
process.stdin.setEncoding('ascii')
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => {
    let rows = input.split('\n')
    let n = Number(rows[0])
    let arr = rows[1].split(' ').map(x => Number(x))
    quicksort(arr, n)
})
