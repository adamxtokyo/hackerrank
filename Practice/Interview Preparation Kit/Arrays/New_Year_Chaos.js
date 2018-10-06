
/*
 * Practice > Interview Preparation Kit > Arrays > New Year Chaos
 * https://www.hackerrank.com/challenges/new-year-chaos/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    for (let i = 1, t = Number(input[0]); i <= t; i++) {
        let q = input[i*2].split(' ').map(Number)
        process.stdout.write(minimumBribes(q) + '\n')
    }
})

// --- SOLUTION BELOW --- //

function minimumBribes (q) {

    let bribes = 0

    for (let i = q.length-1; i >= 0; i--) {
        if (q[i]-i-1 > 2) return 'Too chaotic'

        for (let j = Math.max(0, q[i]-2); j < i; j++) {
            if (q[j] > q[i]) bribes++
        }
    }

    return bribes
}
