
/*
 * Practice > Regex > Applications > Detect HTML links
 * https://www.hackerrank.com/challenges/detect-html-links/problem
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

    let result = scrapeLinks(arr, n)
    process.stdout.write(result.map(x => x.join(',')).join('\n'))
})

// --- SOLUTION BELOW --- //

function scrapeLinks (arr, n = arr.length) {
    return arr.reduce((results, string) => {
        let regex = /(?:<a.*?href=")(.*?)(?:".*?>\s*)(?:<.+?>){0,1}(.*?)(?:<.*?\/a>)/gi
        let match
        while (match = regex.exec(string)) results.push([ match[1], match[2] ])
        return results
    }, [])
}
