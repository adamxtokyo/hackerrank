
/*
 * Practice > Regex > Applications > Split the Phone Numbers
 * https://www.hackerrank.com/challenges/split-number/problem
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
    const phoneNumbers = input.slice(1, 1 + n)

    const results = splitPhoneNumbers(...phoneNumbers)
    process.stdout.write(results.join('\n'))
})

// --- SOLUTION BELOW --- //

function splitPhoneNumbers (...numbers) {
    return numbers
        .map(number => number.match(/^(\d+)[\s-]*(\d+)[\s-]*(\d+)$/))
        .map(x => `CountryCode=${x[1]},LocalAreaCode=${x[2]},Number=${x[3]}`)
}
