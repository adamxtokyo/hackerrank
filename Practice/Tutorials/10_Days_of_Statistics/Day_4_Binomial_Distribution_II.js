
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 4: Binomial Distribution II
 * https://www.hackerrank.com/challenges/s10-binomial-distribution-2/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const [d, n] = stdin.split(' ').map(Number)
    const q = d / 100
    const p = 1 - q

    const answer1 = cumulativeProbability(n - 2, n, p).toFixed(3)
    const answer2 = cumulativeProbability(2, n, q).toFixed(3)

    process.stdout.write(`${answer1}\n${answer2}`)
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
