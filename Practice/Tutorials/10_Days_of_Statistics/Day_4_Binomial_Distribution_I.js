
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 4: Binomial Distribution I
 * https://www.hackerrank.com/challenges/s10-binomial-distribution-1/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const [b, g] = stdin.split(' ').map(Number)
    const p = b / (b + g)

    const result = cumulativeProbability(3, 6, p)
    process.stdout.write(result.toFixed(3))
})

// --- SOLUTION BELOW --- //

function cumulativeProbability (x, n, p, cp = 0) {
    return x > n ? cp : cumulativeProbability(x + 1, n, p, cp + binomialDistribution(x, n, p))
}

function binomialDistribution (x, n, p) {
    return combination(n, x) * (p ** x) * ((1 - p) ** (n - x))
}

function combination (n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r))
}

function factorial (n, f = 1) {
    return n ? factorial(n - 1, f * n) : f
}
