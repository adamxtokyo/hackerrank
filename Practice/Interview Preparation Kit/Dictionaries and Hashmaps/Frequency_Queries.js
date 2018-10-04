
/*
 * Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Frequency Queries
 * https://www.hackerrank.com/challenges/frequency-queries/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    let q = Number(input[0])
    let queries = input.slice(1, q+1).map(r => r.split(' ').map(Number))
    process.stdout.write(freqQuery(queries).join('\n'))
})

// --- SOLUTION BELOW --- //

function freqQuery (queries) {
    let count = []
    let frequency = [queries.length]
    let result = []
    queries.forEach(q => {
        let c = q[1]
        let f
        switch (q[0]) {
            case 1:
                f = count[c] = (count[c] || 0) + 1
                frequency[f-1]--
                frequency[f] = (frequency[f] || 0) + 1
                break
            case 2:
                if (!count[c]) break
                f = --count[c]
                frequency[f+1]--
                frequency[f]++
                break
            case 3:
                result.push(frequency[c] ? 1 : 0)
        }
    })
    return result
}
