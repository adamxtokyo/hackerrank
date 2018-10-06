
/*
 * Practice > Interview Preparation Kit > String Manipulation > Alternating Characters
 * https://www.hackerrank.com/challenges/alternating-characters/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    for (let i = 1, q = Number(input[0]); i <= q; i++) {
        let s = input[i]
        process.stdout.write(alternatingCharacters(s) + '\n')
    }
})

// --- SOLUTION BELOW --- //

function alternatingCharacters (s) {
    return [...s].reduce((a,v,i) => a += (v === s[i+1]), 0)
}
