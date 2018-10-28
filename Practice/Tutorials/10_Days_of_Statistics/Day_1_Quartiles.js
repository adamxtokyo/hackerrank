
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 1: Quartiles
 * https://www.hackerrank.com/challenges/s10-quartiles/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const input = stdin.split('\n')

    const n = Number(input[0])
    const x = input[1].split(' ').map(Number).sort((a, b) => a - b)

    const result = calcQuartiles(x, n)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function calcQuartiles (arr, n = arr.length) {
    const q2 = calcMedian(arr, n)
    const q1 = calcMedian(n % 2 === 0 ? arr.slice(0, n / 2) : arr.slice(0, Math.ceil(n / 2) - 1))
    const q3 = calcMedian(n % 2 === 0 ? arr.slice(n / 2) : arr.slice(Math.ceil(n / 2)))
    return [q1, q2, q3]
}

function calcMedian (arr, n = arr.length) {
    return (arr[Math.floor(n / 2)] + arr[Math.ceil((n / 2) - 1)]) / 2
}
