
/*
 * Counting Sort 3
 * https://www.hackerrank.com/challenges/countingsort3/problem
 */

'use strict'

function countingSort (arr) {
    let count = new Array(100).fill(0)
    arr.forEach(i => count[i]++)
    count.forEach( (v, i) => count[i] += count[i-1] || 0 )
    return count
}

let input = ''
process.stdin.resume()
process.stdin.setEncoding('ascii')
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => {
    let rows = input.split('\n')
    let n = Number(rows[0])
    let arr = rows.slice(1, n+1).map(r => Number(r.split(' ')[0]))
    let result = countingSort(arr)
    console.log(result.join(' '))
})
