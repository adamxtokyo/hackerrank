
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 0: Weighted Mean
 * https://www.hackerrank.com/challenges/s10-weighted-mean/problem
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
    const w = input[2].split(' ').map(Number)

    const result = calcWeightedMean(x, w)
    process.stdout.write(result)
})

// --- SOLUTION BELOW --- //

function calcWeightedMean (x, w) {
    return (
        x.reduce((acc, val, id) => acc + val * w[id], 0) / w.reduce((acc, val) => acc + val, 0)
    ).toFixed(1)
}
