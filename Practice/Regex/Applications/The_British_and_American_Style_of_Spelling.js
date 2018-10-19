
/*
 * Practice > Regex > Applications > The British and American Style of Spelling
 * https://www.hackerrank.com/challenges/uk-and-us/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    const input =  input_stdin.split('\n')

    const n = Number(input[0])
    const text = input.slice(1, 1+n).join('\n')

    const t = Number(input[1+n])
    const tests = input.slice(2+n, 2+n+t)

    const result = wordCount(text, tests)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function wordCount (text, tests) {
    return tests.map(t => {
        const us = t
        const uk = us.slice(0,-2) + 'se'
        return (text.match(new RegExp(`${us}|${uk}`, 'g')) || []).length
    })
}
