
/*
 * Practice > Regex > Applications > Find HackerRank
 * https://www.hackerrank.com/challenges/find-hackerrank/problem
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
    const sentences = input.slice(1, 1 + n)

    const results = findHackerrank(...sentences)
    process.stdout.write(results.join('\n'))
})

// --- SOLUTION BELOW --- //

function findHackerrank (...sentences) {
    return sentences.map((sentence) => {
        if (/^hackerrank$/.test(sentence)) return 0
        if (/^hackerrank/.test(sentence)) return 1
        if (/hackerrank$/.test(sentence)) return 2
        return -1
    })
}
