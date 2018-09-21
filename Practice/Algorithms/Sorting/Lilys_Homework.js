
/*
 * Practice > Algorithms > Sorting > Lily's Homework
 * https://www.hackerrank.com/challenges/lilys-homework/problem
 */

'use strict'

let input = ''

process.stdin.resume()
process.stdin.setEncoding('utf-8')
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => main())

function main() {
    input = input.split('\n')
    let n = Number(input[0])
    let arr = input[1].split(' ').map(x => Number(x))
    let result = lilysHomework(n, arr)
    return console.log(result)
}

function lilysHomework (n, arr) {

    const swaps = (arr, sarr) => {
        let [s, idx] = [0, []]
        arr.forEach((v,i) => idx[v] = i)
        for (let i = 0, j; i < n; i++) {
            while (arr[i] === sarr[i] && i < n) i++
            j = idx[sarr[i]]
            idx[arr[i]] = j
            arr[i] = [ arr[j], arr[j] = arr[i] ][0]
            s++
        }
        return s-1
    }

    let asc = [...arr].sort((a,b) => a-b)
    let desc = [...asc].reverse()
    let s1 = swaps([...arr], asc)
    let s2 = swaps(arr, desc)

    return Math.min(s1, s2)
}
