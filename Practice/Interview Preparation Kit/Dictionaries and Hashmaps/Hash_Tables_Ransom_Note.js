
/*
 * Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Hash Tables: Ransom Note
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    // let [m, n] = input[0].split(' ').map(Number)
    let magazine = input[1].split(' ')
    let note = input[2].split(' ')
    process.stdout.write(checkMagazine(magazine, note) + '\n')
})

// --- SOLUTION BELOW --- //

function checkMagazine (magazine, note) {

    let word_map = new Map()
    magazine.forEach(word => word_map.set(word, (word_map.get(word) || 0) + 1))

    for (let i = 0, l = note.length; i < l; i++) {
        let words = word_map.get(note[i])
        if (!words) return 'No'
        word_map.set(note[i], words - 1)
    }
    return 'Yes'
}
