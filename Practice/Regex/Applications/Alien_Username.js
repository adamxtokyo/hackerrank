
/*
 * Practice > Regex > Applications > Alien Username
 * https://www.hackerrank.com/challenges/alien-username/problem
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
    const usernames = input.slice(1, 1 + n)

    const result = isValidAlienUsername(usernames)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function isValidAlienUsername (usernames) {
    const regex = /^(?:_|\.)\d+[A-Za-z]*_?$/
    return usernames.map(username => (regex.test(username) ? 'VALID' : 'INVALID'))
}
