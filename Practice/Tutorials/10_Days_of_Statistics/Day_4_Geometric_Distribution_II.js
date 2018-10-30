
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 4: Geometric Distribution II
 * https://www.hackerrank.com/challenges/s10-geometric-distribution-2/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const input = stdin.split('\n')

    const [numerator, denominator] = input[0].split(' ').map(Number)
    const p = numerator / denominator
    const n = Number(input[1])

    process.stdout.write(geometricDistribution(n, p).toFixed(3))
})

// --- SOLUTION BELOW --- //

function geometricDistribution (n, p, cp = 0) {
    return n ? geometricDistribution(n - 1, p, cp + (((1 - p) ** (n - 1)) * p)) : cp
}
