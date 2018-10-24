
/*
 * Practice > Regex > Applications > HackerRank Tweets
 * https://www.hackerrank.com/challenges/hackerrank-tweets/problem
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
    const tweets = input.slice(1, 1 + n)

    const result = containsHackerrank(tweets)
    process.stdout.write(result.toString())
})

// --- SOLUTION BELOW --- //

function containsHackerrank (tweets) {
    return tweets.reduce((acc, tweet) => (/hackerrank/i.test(tweet) ? acc + 1 : acc), 0)
}
