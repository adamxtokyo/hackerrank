
/*
 * Practice > Regex > Applications > Build a Stack Exchange Scraper
 * https://www.hackerrank.com/challenges/stack-exchange-scraper/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const results = scrape(stdin)
    process.stdout.write(results.join('\n'))
})

// --- SOLUTION BELOW --- //

function scrape (html) {
    return html
        .replace('\n', '')
        .match(/href="\/questions\/(\d+).*?>(.+?)<(?:.|\n)*?class="relativetime">(.+?)</gi)
        .map(question => (
            question.replace(
                /href="\/questions\/(\d+).*?>(.+?)<(?:.|\n)*?class="relativetime">(.+?)</gi,
                (_, id, text, time) => `${id};${text};${time}`,
            )
        ))
}
