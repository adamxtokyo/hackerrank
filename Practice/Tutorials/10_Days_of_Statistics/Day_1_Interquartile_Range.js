
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 1: Interquartile Range
 * https://www.hackerrank.com/challenges/s10-interquartile-range/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const input = stdin.split('\n')

    const x = input[1].split(' ').map(Number)
    const f = input[2].split(' ').map(Number)
    const s = x.reduce((acc, val, id) => [...acc, ...new Array(f[id]).fill(val)], [])
        .sort((a, b) => a - b)

    const result = calcInterquartileRange(s)
    process.stdout.write(result.toFixed(1))
})

// --- SOLUTION BELOW --- //

function calcInterquartileRange (arr, n = arr.length) {
    const quartiles = calcQuartiles(arr, n)
    return quartiles[2] - quartiles[0]
}

function calcQuartiles (arr, n = arr.length) {
    const q2 = calcMedian(arr, n)
    const q1 = calcMedian(n % 2 === 0 ? arr.slice(0, n / 2) : arr.slice(0, Math.ceil(n / 2) - 1))
    const q3 = calcMedian(n % 2 === 0 ? arr.slice(n / 2) : arr.slice(Math.ceil(n / 2)))
    return [q1, q2, q3]
}

function calcMedian (arr, n = arr.length) {
    return (arr[Math.floor(n / 2)] + arr[Math.ceil((n / 2) - 1)]) / 2
}
