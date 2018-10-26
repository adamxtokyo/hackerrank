
/*
 * Practice > Regex > Applications > Building a Smart IDE: Programming Language Detection
 * https://www.hackerrank.com/challenges/programming-language-detection/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const result = detectLanguage(stdin)
    process.stdout.write(result)
})

// --- SOLUTION BELOW --- //

function detectLanguage (sourceCode) {
    if (/#include/i.test(sourceCode)) return 'C'
    if (/import java/i.test(sourceCode)) return 'Java'
    return 'Python'
}
