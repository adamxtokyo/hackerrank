
/*
 * Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Sherlock and Anagrams
 * https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    for (let i = 1, q = Number(input[0]); i <= q; i++) {
        let s = input[i]
        process.stdout.write(sherlockAndAnagrams(s) + '\n')
    }
})

// --- SOLUTION BELOW --- //

function sherlockAndAnagrams (str) {

    let substr_map = new Map()
    for (let i = 0, l = str.length; i < l; i++) {
        for (let j = i; j < l; j++) {
            let substr = [ ...str.slice(i, j+1) ].sort().join('')
            let count = substr_map.get(substr) || 0
            substr_map.set(substr, count + 1)
        }
    }

    return [ ...substr_map.values() ].reduce((a,v) => a += v > 1 ? v * (v - 1)/2 : 0, 0)
}
