
/*
 * Running Time of Quicksort
 * https://www.hackerrank.com/challenges/quicksort4/problem
 */

'use strict'

function insertionSort (arr, l = arr.length) {
    let shifts = 0
    let storage
    for (let i = 1; i < l; i++) {
        storage = arr[i]
        for (let j = i-1; j >= 0; j--) {
            if (storage >= arr[j]) break
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            shifts++
        }
    }
    return shifts
}

let swaps = 0
function quickSort (arr, lo = 0, hi = arr.length-1) {
    if (lo < hi) {
        let pivot = arr[hi]
        let i = lo
        for (let j = lo; j < hi; j++) {
            if (arr[j] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
                i++
            }
        }
        [arr[i], arr[hi]] = [arr[hi], arr[i]]
        swaps += i-lo+1
        arr = quickSort(arr, lo, i-1)
        arr = quickSort(arr, i+1, hi)
    }
    return arr
}

let input = ''
process.stdin.resume()
process.stdin.setEncoding('ascii')
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => {
    let rows = input.split('\n')
    let n = Number(rows[0])
    let arr = rows[1].split(' ').map(x => Number(x))
    quickSort(arr.slice(), 0, n-1)
    console.log(insertionSort(arr.slice(), n) - swaps)
})
