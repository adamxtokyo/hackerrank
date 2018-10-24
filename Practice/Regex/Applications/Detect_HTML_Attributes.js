
/*
 * Practice > Regex > Applications > Detect HTML Attributes
 * https://www.hackerrank.com/challenges/html-attributes/problem
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
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function scrapeTags (html) {
    const results = new Map()
    const tags = html.match(/<[a-z]+.*?>/gi).sort()
    tags.forEach((tag) => {
        const tagName = /<([a-z1-6]+)/i.exec(tag)[1]
        const attributes = tag.match(/[a-z]+(?==("|').+("|'))/gi) || []
        if (!results.has(tagName)) return results.set(tagName, attributes)
        return results.set(tagName, [...results.get(tagName), ...attributes])
    })
    return Array.from(results).map(tag => `${tag[0]}:${[...new Set(tag[1])].sort()}`)
}
