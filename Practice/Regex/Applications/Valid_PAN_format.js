
/*
 * Practice > Regex > Applications > Valid PAN format
 * https://www.hackerrank.com/challenges/valid-pan-format/problem
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
    const panNumberArr = input.slice(1, 1 + n)

    const results = isValidPan(panNumberArr)
    process.stdout.write(results.map(x => (x ? 'YES' : 'NO')).join('\n'))
})

// --- SOLUTION BELOW --- //

function isValidPan (panNumberArr) {
    return panNumberArr.map(panNumber => /^[A-Z]{5}\d{4}[A-Z]/.test(panNumber))
}
