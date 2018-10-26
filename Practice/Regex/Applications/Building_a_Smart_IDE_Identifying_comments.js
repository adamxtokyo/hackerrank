
/*
 * Practice > Regex > Applications > Building a Smart IDE: Identifying comments
 * https://www.hackerrank.com/challenges/ide-identifying-comments/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const results = scrapeComments(stdin)
    process.stdout.write(results.join('\n'))
})

// --- SOLUTION BELOW --- //

function scrapeComments (sourceCode) {
    return (sourceCode.match(/(?:\/\/.*|\/\*[^]*?\*\/)/g) || [])
        .map(comment => comment.split('\n').map(line => line.trim()).join('\n'))
}
