
/*
 * Contests > ProjectEuler+ > Project Euler #1: Multiples of 3 and 5
 * https://www.hackerrank.com/contests/projecteuler/challenges/euler001
 */

const BigNumber = require('bignumber.js')

function multiples (x) {
    x = new BigNumber(x-1)
    const sum = y => new BigNumber(y).times(x.dividedToIntegerBy(y)).times(x.dividedToIntegerBy(y).plus(1).dividedBy(2))
    return sum(3).plus(sum(5)).minus(sum(15)).toFixed()
}
