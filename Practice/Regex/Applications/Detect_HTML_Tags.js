
/*
 * Practice > Regex > Applications > Detect HTML Tags
 * https://www.hackerrank.com/challenges/detect-html-tags/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')

    let n = Number(input[0])
    let arr = input.slice(1)

    let result = scrapeTags(arr, n)
    process.stdout.write(result.join(';'))
})

// --- SOLUTION BELOW --- //

function scrapeTags (arr, n = arr.length) {

    let tags_set = arr.reduce((acc, html_row) => {
        let regex = /(?:<\w*?(\w+).*?>)/gi
        let match
        while (match = regex.exec(html_row)) acc.add(match[1])
        return acc
    }, new Set())

    return [...tags_set].sort()
}
