
/*
 * Practice > Regex > Applications > Find A Sub-Word
 * https://www.hackerrank.com/challenges/find-substring/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')

    let n = Number(input[0])
    let str = input.slice(1, 1+n).join('\n')

    let q = Number(input[1+n])
    let queries = input.slice(2+n, 2+n+q)

    let result = findSubWord(str, queries)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function findSubWord (str, queries) {
    return queries.map(q => (str.match(new RegExp(`\\w+?(${q})\\w+?`, 'g')) || []).length)
}
