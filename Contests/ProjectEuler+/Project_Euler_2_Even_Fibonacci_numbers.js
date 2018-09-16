
/*
 * Contests > ProjectEuler+ > Project Euler #2: Even Fibonacci numbers
 * https://www.hackerrank.com/contests/projecteuler/challenges/euler002
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
    for (let i = bn(0); i.lt(t); i = i.plus(1)) process.stdout.write(fibonacci(arr[i]) + '\n')
}

/////////////// IGNORE ABOVE THIS LINE ////////////////////

function fibonacci (n) {
    let [current, prev, sum, temp] = [new bn(2), new bn(0), new bn(0)]
    while (current.lt(n)) {
        sum = sum.plus(current)
        temp = current
        current = current.times(4).plus(prev)
        prev = temp
    }
    return sum.toFixed()
}
