
/*
 * Practice > Regex > Applications > Detect HTML Tags
 * https://www.hackerrank.com/challenges/detect-html-tags/problem
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
    const html = input.slice(1, 1 + n).join()

    const result = scrapeTags(html)
    process.stdout.write(result.join(';'))
})

// --- SOLUTION BELOW --- //

function scrapeTags (html) {
    // Since lookbehinds aren't supported atm, we match the < and strip it later with slice
    const regex = /<\w+?(?=[ >].*?<\/)/g
    return [...new Set(html.match(regex).map(x => x.slice(1)))].sort()
}
