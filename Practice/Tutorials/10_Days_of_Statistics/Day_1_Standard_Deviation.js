
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 1: Standard Deviation
 * https://www.hackerrank.com/challenges/s10-standard-deviation/problem
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

    const result = calcStandardDeviation(x, n)
    process.stdout.write(result.toFixed(1))
})

// --- SOLUTION BELOW --- //

function calcStandardDeviation (arr, n = arr.length) {
    const mean = arr.reduce((acc, val) => acc + val, 0) / n
    return Math.sqrt(arr.reduce((acc, val) => acc + ((val - mean) ** 2), 0) / n)
}
