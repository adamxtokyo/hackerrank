
/*
 * Practice > Regex > Applications > Saying Hi
 * https://www.hackerrank.com/challenges/saying-hi/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    const input =  input_stdin.split('\n')

    const n = Number(input[0])
    const sentences = input.slice(1, 1+n)

    const result = sayHi(sentences)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function sayHi (arr) {
    return arr.reduce((acc,sentence) => {
        if (/^[Hh][Ii]\s[^Dd]/.test(sentence)) acc.push(sentence)
        return acc
    }, [])
}
