
/*
 * Practice > Regex > Applications > Find a Word
 * https://www.hackerrank.com/challenges/find-a-word/problem
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

    const t = Number(input[1 + n])
    const words = input.slice(2 + n, 2 + n + t)

    const results = findWord(text, words)
    process.stdout.write(results.join('\n'))
})

// --- SOLUTION BELOW --- //

function findWord (text, words) {
    const cleanText = text.replace('_', '')
    return words
        .map((word) => {
            const regex = new RegExp(`\\b${word}\\b`, 'ig')
            return (cleanText.match(regex) || []).length
        })
}
