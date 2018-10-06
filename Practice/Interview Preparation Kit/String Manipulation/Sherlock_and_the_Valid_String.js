
/*
 * Practice > Interview Preparation Kit > String Manipulation > Sherlock and the Valid String
 * https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => process.stdout.write(isValid(input_stdin))
)

// --- SOLUTION BELOW --- //

function isValid (s) {

    // Create frequency index
    let id = new Array(26).fill(0)
    s.split('').forEach((v,i) => id[s.charCodeAt(i) - 97]++)

    // Create reverse frequency index
    let rid = new Array(Math.max(...id) + 1).fill(0)
    id.forEach((v,i) => rid[id[i]]++)

    // Figure out the most common frequency
    let mc = rid.indexOf(Math.max(...rid.slice(1)))

    // Figure out how many unique frequencies there are
    let l = rid.slice(1).filter(x => x > 0).length

    if (l === 1) return 'YES'
    if (l === 2 && (rid[1] === 1 || rid[mc+1] === 1)) return 'YES'
    return 'NO'
}
