
/*
 * Quicksort In-Place
 * https://www.hackerrank.com/challenges/quicksort3/problem
 */

'use strict'

function quicksort (arr, lo = 0, hi = arr.length-1) {

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
        console.log(...arr)

        arr = quicksort(arr, lo, i-1)
        arr = quicksort(arr, i+1, hi)
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
    quicksort(arr, 0, n-1)
})
