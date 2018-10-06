
/*
 * Practice > Interview Preparation Kit > Greedy Algorithms > Luck Balance
 * https://www.hackerrank.com/challenges/luck-balance/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')
    let [n, k] = input[0].split(' ').map(Number)
    let contests = input.slice(1, n+1).map(r => r.split(' ').map(Number))
    process.stdout.write(luckBalance(k, contests) + '\n')
})

// --- SOLUTION BELOW --- //

function luckBalance (k, contests) {

    let max_luck = 0

    let important = contests.reduce( (arr, contest) => {
        let [luck, important] = [...contest]
        if (important) return [...arr, luck]
        max_luck += luck
        return arr
    }, []).sort((a,b) => b-a)

    max_luck += important.slice(0, k).reduce((total,luck) => total+luck, 0)
    max_luck -= important.slice(k).reduce((total,luck) => total+luck, 0)

    return max_luck
}
