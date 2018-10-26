
/*
 * Practice > Regex > Applications > UK and US: Part 2
 * https://www.hackerrank.com/challenges/uk-and-us-2/problem
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
    const text = input.slice(1, 1 + n).join('\n')

    const t = Number(input[1 + n])
    const tests = input.slice(2 + n, 2 + n + t)

    const result = wordCount(text, tests)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function wordCount (text, tests) {
    return tests.map((t) => {
        const uk = t
        const us = uk.replace(/our/, 'or')
        return (text.match(new RegExp(`(?:${us}|${uk})\\b`, 'g')) || []).length
    })
}
