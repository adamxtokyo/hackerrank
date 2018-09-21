
/*
 * Practice > Algorithms > Sorting > Insertion Sort Advanced Analysis
 * https://www.hackerrank.com/challenges/insertion-sort/problem
 */

'use strict'

let input = ''

process.stdin.resume()
process.stdin.setEncoding('utf-8')
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => main())

function main() {
    input = input.split('\n')

    for (let i = 1, t = Number(input[0])*2; i < t; i+=2) {
        let n = Number(input[i])
        let arr = input[i+1].split(' ').map(x => Number(x))
        let result = insertionSort (n, arr)
        console.log(result)
    }
}

function insertionSort (n, arr) {

    if (n === 1) return 0

    let n1 = Math.floor(n/2)
    let n2 = n-n1
    let [arr1, arr2] = [arr.slice(0,n1), arr.slice(n1)]
    let s = insertionSort(n1, arr1) + insertionSort(n2, arr2)
    let [i1, i2] = [0, 0]
    for (let i = 0; i < n; i++) {
        if (i1 < n1 && (i2 >= n2 || arr1[i1] <= arr2[i2])) {
            arr[i] = arr1[i1]
            s += i2
            i1++
        } else if (i2 < n2) {
            arr[i] = arr2[i2]
            i2++
        }
    }
    return s
}
