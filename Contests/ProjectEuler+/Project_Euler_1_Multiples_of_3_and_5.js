
/*
 * Contests > ProjectEuler+ > Project Euler #1: Multiples of 3 and 5
 * https://www.hackerrank.com/contests/projecteuler/challenges/euler001
 */

const bn = require('bignumber.js')

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let arr = input_stdin.split('\n').map(x => new bn(x))
    return main(arr[0], arr.slice(1))
})

function main (t, arr) {
    for (let i = bn(0); i.lt(t); i = i.plus(1)) process.stdout.write(multiples(arr[i]) + '\n')
}

/////////////// IGNORE ABOVE THIS LINE ////////////////////

function multiples (x) {
    const sum = y => new bn(y).times(x.minus(1).idiv(y)).times(x.minus(1).idiv(y).plus(1).div(2))
    return sum(3).plus(sum(5)).minus(sum(15)).toFixed()
}
