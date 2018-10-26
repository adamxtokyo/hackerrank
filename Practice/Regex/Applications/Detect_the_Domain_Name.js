
/*
 * Practice > Regex > Applications > Detect the Domain Name
 * https://www.hackerrank.com/challenges/detect-the-domain-name/problem
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

    const results = scrapeDomains(html)
    process.stdout.write(results.join(';'))
})

// --- SOLUTION BELOW --- //

function scrapeDomains (html) {
    const matches = (html.match(/https?:\/\/[a-z0-9._-]+\.[a-z]+/gi) || [])
        .map(url => /https?:\/\/(?:[w0-9]{3}\.)?((?:[a-z0-9._-]+\.)[a-z]+)/gi.exec(url)[1])
    return [...new Set(matches)].sort()
}
