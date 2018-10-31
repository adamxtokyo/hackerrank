
/*
 * Practice > Tutorials > 10 Days of Statistics > Day 5: Poisson Distribution II
 * https://www.hackerrank.com/challenges/s10-poisson-distribution-2/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const [x, y] = stdin.split(' ').map(Number)

    const costA = (160 + 40 * (x + (x ** 2))).toFixed(3)
    const costB = (128 + 40 * (y + (y ** 2))).toFixed(3)

    process.stdout.write(`${costA}\n${costB}`)
})
