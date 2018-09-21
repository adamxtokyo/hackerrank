
/*
 * Practice > Algorithms > Greedy > Largest Permutation
 * https://www.hackerrank.com/challenges/largest-permutation/problem
 */

'use strict'

let input = ''

process.stdin.resume()
process.stdin.setEncoding('utf-8')
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => main())

function main() {
    input = input.split('\n')
    let [n, k] = input[0].split(' ').map(x => Number(x))
    let arr = input[1].split(' ').map(x => Number(x))
    let result = largestPermutation(n, k, arr)
    process.stdout.write(result.join(' '))
}

function largestPermutation (n, k, arr) {
    let sarr = arr.slice().sort((a,b) => b-a)
    if (k >= n) return sarr
    for (let i = 0, s = 0, m; s < k; s++) {
        while (arr[i] === sarr[i] && i < n) i++
        m = arr.indexOf(sarr[i], i)
        arr[i] = [ arr[m], arr[m] = arr[i] ][0]
    }
    return arr
}
