
/*
 * Practice > Interview Preparation Kit > Search > Hash Tables: Ice Cream Parlor
 * https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    let t = Number(input[0])
    for (let i = 0; i < t; i++) {
        let [money, n] = [input[i*3+1], input[i*3+2]]
        let cost = input[i*3+3].split(' ').map(Number)
        process.stdout.write(whatFlavors(cost, money).join(' ') + '\n')
    }
})

// --- SOLUTION BELOW --- //

function whatFlavors (cost, money) {

    let reverse_index = []
    cost.forEach((v,i) => reverse_index[v] = i)

    for (let i = 0, l = cost.length; i < l; i++) {
        let j = reverse_index[money - cost[i]]
        if (j) return [i+1, j+1]
    }
}
