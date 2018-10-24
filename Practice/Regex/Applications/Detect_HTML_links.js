
/*
 * Practice > Regex > Applications > Detect HTML links
 * https://www.hackerrank.com/challenges/detect-html-links/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const result = scrapeLinks(stdin)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function scrapeLinks (html) {
    return html
        .match(/<a.*?<\/a>/gi)
        .map(tag => (
            tag.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/ig, (_, href, text) => (
                `${href.trim()},${text.replace(/<.*?>/g, '').trim()}`
            ))
        ))
}
