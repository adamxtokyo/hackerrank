
/*
 * Practice > Regex > Applications > Utopian Identification Number
 * https://www.hackerrank.com/challenges/utopian-identification-number/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    const input =  input_stdin.split('\n')

    const n = Number(input[0])
    const id_numbers = input.slice(1, 1+n)

    const result = isValidId(id_numbers)
    process.stdout.write(result.map(x => x ? 'VALID' : 'INVALID').join('\n'))
})

// --- SOLUTION BELOW --- //

function isValidId (arr) {
    return arr.map(id_number => /^[a-z]{0,3}\d{2,8}[A-Z]{3,}/.test(id_number))
}
