
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 0: Mean, Median, and Mode
 * https://www.hackerrank.com/challenges/s10-basic-statistics/problem
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
    const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)

    const result = calcMeanMedianMode(arr, n)
    process.stdout.write(result.map(x => x.toFixed(1)).join('\n'))
})

// --- SOLUTION BELOW --- //

function calcMeanMedianMode (arr, n = arr.length) {
    const frequencyMap = arr.reduce((acc, val) => {
        if (!acc.has(val)) acc.set(val, 0)
        acc.set(val, acc.get(val) + 1)
        return acc
    }, new Map())

    const mean = arr.reduce((acc, val) => acc + val, 0) / n
    const median = (arr[Math.floor(n / 2)] + arr[Math.ceil((n / 2) - 1)]) / 2
    const mode = [...frequencyMap.entries()].reduce((acc, val) => (
        val[1] > acc[1] ? val : acc
    ), [0, 0])[0]

    return [mean, median, mode]
}
