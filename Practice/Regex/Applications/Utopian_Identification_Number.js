
/*
 * Practice > Regex > Applications > Utopian Identification Number
 * https://www.hackerrank.com/challenges/utopian-identification-number/problem
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
    const idNumbers = input.slice(1, 1 + n)

    const result = isValidId(...idNumbers)
    process.stdout.write(result.map(x => (x ? 'VALID' : 'INVALID')).join('\n'))
})

// --- SOLUTION BELOW --- //

function isValidId (...idNumbers) {
    return idNumbers.map(idNumber => /^[a-z]{0,3}\d{2,8}[A-Z]{3,}/.test(idNumber))
}
