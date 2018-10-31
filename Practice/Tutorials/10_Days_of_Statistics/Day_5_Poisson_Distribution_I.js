
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 5: Poisson Distribution I
 * https://www.hackerrank.com/challenges/s10-poisson-distribution-1/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const input = stdin.split('\n')

    const mean = Number(input[0])
    const x = Number(input[1])

    process.stdout.write(calcProbability(x, mean).toFixed(3))
})

// --- SOLUTION BELOW --- //

function calcProbability (k, l) {
    return ((l ** k) * (2.71828 ** -l)) / factorial(k)
}

function factorial (n, f = 1) {
    return n ? factorial(n - 1, f * n) : f
}
