
/*
 * Practice > Regex > Applications > Alien Username
 * https://www.hackerrank.com/challenges/alien-username/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')

    let n = Number(input[0])
    let usernames = input.slice(1, 1+n)

    let result = isValidAlienUsername(usernames)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function isValidAlienUsername (usernames) {
    const regex = /^(?:_|\.)\d+[A-Za-z]*_?$/
    return usernames.map(username => regex.test(username) ? 'VALID' : 'INVALID')
}
