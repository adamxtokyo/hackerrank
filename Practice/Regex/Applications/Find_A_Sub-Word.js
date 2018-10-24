
/*
 * Practice > Regex > Applications > Find A Sub-Word
 * https://www.hackerrank.com/challenges/find-substring/problem
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
    const str = input.slice(1, 1 + n).join('\n')

    const q = Number(input[1 + n])
    const queries = input.slice(2 + n, 2 + n + q)

    const result = findSubWord(str, queries)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function findSubWord (str, queries) {
    return queries.map(q => (str.match(new RegExp(`\\w+?(${q})\\w+?`, 'g')) || []).length)
}
