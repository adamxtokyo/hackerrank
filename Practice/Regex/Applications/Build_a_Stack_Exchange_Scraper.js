
/*
 * Practice > Regex > Applications > Build a Stack Exchange Scraper
 * https://www.hackerrank.com/challenges/stack-exchange-scraper/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {

    const results = scrape(input_stdin)
    process.stdout.write(results.join('\n'))
})

// --- SOLUTION BELOW --- //

function scrape (html) {
    let results = []
    const regex = /href="\/questions\/(\d+).*?>(.+?)<(?:.|\n)*?class="relativetime">(.+?)</gi
    let match
    while (match = regex.exec(html)) results.push(`${match[1]};${match[2]};${match[3]}`)
    return results
}
