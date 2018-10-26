
/*
 * Practice > Regex > Applications > Detect the Email Addresses
 * https://www.hackerrank.com/challenges/detect-the-email-addresses/problem
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
    const text = input.slice(1, 1 + n).join()

    const results = scrapeEmails(text)
    process.stdout.write(results.join(';'))
})

// --- SOLUTION BELOW --- //

function scrapeEmails (text) {
    const matches = (text.match(/[a-z._-]+@[a-z._-]+\.[a-z]+/gi) || []).sort()
    return [...new Set(matches)]
}
