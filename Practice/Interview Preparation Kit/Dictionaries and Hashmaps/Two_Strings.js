
/*
 * Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Two Strings
 * https://www.hackerrank.com/challenges/two-strings/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    for (let i = 0, p = Number(input[0]); i < p; i++) {
        let [s1, s2] = [input[i*2+1], input[i*2+2]]
        process.stdout.write(twoStrings(s1, s2) + '\n')
    }
})

// --- SOLUTION BELOW --- //

function twoStrings (str1, str2) {
    let [set1, set2] = [new Set(str1), new Set(str2)]
    for (let char of set1) if (set2.has(char)) return 'YES'
    return 'NO'
}
