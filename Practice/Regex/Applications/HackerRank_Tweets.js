
/*
 * Practice > Regex > Applications > HackerRank Tweets
 * https://www.hackerrank.com/challenges/hackerrank-tweets/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    const input =  input_stdin.split('\n')

    const n = Number(input[0])
    const tweets = input.slice(1, 1+n)

    const result = containsHackerrank(tweets)
    process.stdout.write(result.toString())
})

// --- SOLUTION BELOW --- //

function containsHackerrank (tweets) {
    return tweets.reduce((acc,tweet) => /hackerrank/i.test(tweet) ? ++acc : acc, 0)
}
